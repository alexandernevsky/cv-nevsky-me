interface Env {
  GITHUB_OAUTH_ID: string
  GITHUB_OAUTH_SECRET: string
  GITHUB_REPO_PRIVATE?: string
}

const githubHost = 'https://github.com'

function randomState() {
  const bytes = new Uint8Array(16)
  crypto.getRandomValues(bytes)
  return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('')
}

function githubScope(env: Env) {
  return env.GITHUB_REPO_PRIVATE === '1' ? 'repo,user' : 'public_repo,user'
}

function callbackUrl(url: URL) {
  return `https://${url.hostname}/callback?provider=github`
}

function html(body: string, status = 200) {
  return new Response(body, {
    status,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
    },
  })
}

function text(body: string, status = 200) {
  return new Response(body, {
    status,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
    },
  })
}

function assertGithubProvider(url: URL) {
  if (url.searchParams.get('provider') !== 'github') {
    return text('Invalid provider', 400)
  }

  return null
}

async function handleAuth(url: URL, env: Env) {
  const providerError = assertGithubProvider(url)

  if (providerError) {
    return providerError
  }

  const target = new URL('/login/oauth/authorize', githubHost)
  target.searchParams.set('response_type', 'code')
  target.searchParams.set('client_id', env.GITHUB_OAUTH_ID)
  target.searchParams.set('redirect_uri', callbackUrl(url))
  target.searchParams.set('scope', githubScope(env))
  target.searchParams.set('state', randomState())

  return Response.redirect(target.toString(), 302)
}

async function exchangeCode(url: URL, env: Env, code: string) {
  const response = await fetch(`${githubHost}/login/oauth/access_token`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      client_id: env.GITHUB_OAUTH_ID,
      client_secret: env.GITHUB_OAUTH_SECRET,
      code,
      redirect_uri: callbackUrl(url),
      grant_type: 'authorization_code',
    }),
  })

  if (!response.ok) {
    throw new Error(`GitHub token exchange failed with ${response.status}`)
  }

  const payload = (await response.json()) as { access_token?: string; error?: string }

  if (!payload.access_token) {
    throw new Error(payload.error || 'GitHub did not return an access token')
  }

  return payload.access_token
}

function decapCallback(status: 'success' | 'error', payload: Record<string, string>) {
  const authMessage = `authorization:github:${status}:${JSON.stringify(payload)}`

  return html(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Authorizing Decap CMS</title>
  </head>
  <body>
    <p>Authorizing Decap CMS...</p>
    <script>
      const receiveMessage = () => {
        window.opener.postMessage(${JSON.stringify(authMessage)}, '*');
        window.removeEventListener('message', receiveMessage, false);
      };

      window.addEventListener('message', receiveMessage, false);
      window.opener.postMessage('authorizing:github', '*');
    </script>
  </body>
</html>`)
}

async function handleCallback(url: URL, env: Env) {
  const providerError = assertGithubProvider(url)

  if (providerError) {
    return providerError
  }

  const code = url.searchParams.get('code')

  if (!code) {
    return text('Missing code', 400)
  }

  try {
    const token = await exchangeCode(url, env, code)
    return decapCallback('success', { token })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown OAuth error'
    return decapCallback('error', { error: message })
  }
}

export default {
  async fetch(request: Request, env: Env) {
    const url = new URL(request.url)

    if (url.pathname === '/auth') {
      return handleAuth(url, env)
    }

    if (url.pathname === '/callback') {
      return handleCallback(url, env)
    }

    return text('Decap OAuth proxy is running.')
  },
}
