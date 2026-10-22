# pure-scan-landing

[![Deploy to GitHub Pages](https://github.com/matthiasrondenet/pure-scan-landing/actions/workflows/deploy.yml/badge.svg)](https://github.com/matthiasrondenet/pure-scan-landing/actions/workflows/deploy.yml)

Site for Pure Scan, a private document scanner for Android: a landing page and the privacy policy.

- Landing: https://purescan.yasd.io/
- Privacy policy: https://purescan.yasd.io/privacy/

Built with React 19, TypeScript and Vite 8. No CSS framework, no third-party requests.

## Development

```bash
npm install
npm run dev
```

## Commands

| Command            | Description                         |
| ------------------ | ----------------------------------- |
| `npm run dev`      | Start dev server                    |
| `npm run build`    | Type-check and build for production |
| `npm run preview`  | Preview the production build        |
| `npm run lint`     | Run ESLint                          |
| `npm run lint:fix` | Run ESLint with auto-fix            |

The site is three static pages (`index.html`, `privacy/index.html`, `404.html`), each mounting the same React entry. The deploy workflow builds with `VITE_BASE=/`, since the site is served from the custom domain purescan.yasd.io.

## Privacy wording

`src/content/privacy-policy.md` is rendered as-is on the privacy page. Its source of truth is `docs/play-store/privacy-policy.md` in the private pure-scan repo: update it there first, then copy it here.

## Fonts

Inter (400, 600), SIL Open Font License 1.1. See `src/fonts/OFL.txt`.
