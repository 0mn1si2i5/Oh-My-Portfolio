# Jiaming Li — Explorations & Work

A bilingual (English / 中文) static portfolio built with Astro and deployed through GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Content and media

- Project case studies live in `src/content/projects/` as MDX entries. Their frontmatter controls card metadata, media, and approved public links.
- All visitor-facing project metadata uses paired `en` / `zh` fields, and each project MDX keeps English and Chinese narrative sections together. When adding or editing portfolio content, update both languages in the same change unless it is intentionally single-language writing (for example, a future Notes post).
- The header language control stores the reader's choice locally. English is the default; Chinese is available on every portfolio page without a route change.
- Typography is bundled with the site: Instrument Sans for English interface/body text, Newsreader for English display text, and Noto Sans SC / Noto Serif SC for Chinese body / display text. Do not replace these with remote font imports.
- Public links are centralized in `src/config/site.ts`.
- Add only approved public media to `public/media/`. The DialogTree source video is intentionally not part of this repository; `dialogtree-preview.mp4` is the compressed web derivative.

## Deployment

Push `main` to GitHub. In the repository’s Pages settings, select **GitHub Actions** as the source. The included workflow detects whether the repository is a project site or a user site and builds with the corresponding base path.
