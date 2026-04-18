# Decap CMS OAuth Worker

Cloudflare Pages does not include Netlify Identity or Git Gateway, so Decap CMS needs a small OAuth proxy before it can commit Markdown changes to GitHub.

This worker serves:

- `/auth` - starts GitHub OAuth for Decap CMS.
- `/callback` - exchanges the GitHub code and returns the Decap CMS authorization message.

## Setup

1. Create a GitHub OAuth App.
2. Set `Homepage URL` to `https://decap.nevsky.me`.
3. Set `Authorization callback URL` to `https://decap.nevsky.me/callback`.
4. Deploy this worker:

```sh
cd cloudflare/decap-oauth-worker
npm install
npx wrangler secret put GITHUB_OAUTH_ID
npx wrangler secret put GITHUB_OAUTH_SECRET
npm run deploy
```

If the GitHub repo becomes private, set `GITHUB_REPO_PRIVATE` to `"1"` in `wrangler.jsonc` before deploy.

The Decap CMS config in `public/admin/config.yml` already points to `https://decap.nevsky.me/auth`.
