# Cloudflare CMS Setup

This project uses Decap CMS as a free flat-file CMS:

- Content lives in Markdown files under `content/`.
- One project is one file in `content/projects/`.
- Each project file has English and Russian fields together: `en`, `ru`, `body_en`, `body_ru`.
- The admin UI is served from `/admin/`.
- On publish, Decap commits to GitHub. Cloudflare Pages then rebuilds the site from the new commit.

## Cloudflare Pages

Use the normal Pages build settings:

```txt
Build command: npm run build
Build output directory: dist
```

The build script runs `npm run generate:content` before Vite, so `src/data/projects.ts` is generated from the Markdown files.

## Decap CMS

The admin config is in `public/admin/config.yml`.

It uses the GitHub backend with a Cloudflare Worker OAuth proxy:

```yaml
backend:
  name: github
  repo: alexandernevsky/cv-nevsky-me
  branch: main
  base_url: https://decap.nevsky.me
  auth_endpoint: /auth
```

## OAuth Worker

Cloudflare Pages does not provide Netlify Identity or Git Gateway. Deploy the worker in `cloudflare/decap-oauth-worker` and create a GitHub OAuth App with:

```txt
Homepage URL: https://decap.nevsky.me
Authorization callback URL: https://decap.nevsky.me/callback
```

Then deploy:

```sh
cd cloudflare/decap-oauth-worker
npm install
npx wrangler secret put GITHUB_OAUTH_ID
npx wrangler secret put GITHUB_OAUTH_SECRET
npm run deploy
```

After that, `/admin/` can authenticate with GitHub, edit Markdown, commit changes, and trigger Cloudflare Pages rebuilds.
