# Bilingual AI Engineer Portfolio

A bilingual, static-first portfolio built with Next.js, TypeScript, Motion, and Tailwind CSS.

## Content workflow

`src/content/resume.md` is the factual resume source. The bilingual website copy and case-study structure live in `src/content/portfolio.ts`.

When facts change:

1. Update `resume.md` first.
2. Sync the relevant English and Chinese copy in `portfolio.ts`.
3. Keep internal implementation details abstract and publish only approved metrics.
4. Add screenshots or short compressed demos when project visuals are available.
5. Run all quality checks before deployment.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. The root redirects to `/en`; Chinese is at `/zh`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy to Vercel

1. Push the project to a Git provider.
2. Import the repository in Vercel.
3. Keep the detected Next.js defaults and deploy.
4. Set `NEXT_PUBLIC_SITE_URL` to the final `https://*.vercel.app` URL, then redeploy so canonical and sitemap URLs use production.

The site uses Vercel Web Analytics within Hobby limits. Vercel Hobby is intended for personal, non-commercial use.
