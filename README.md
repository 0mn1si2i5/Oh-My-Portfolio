# Jiaming Li — Explorations & Work

An English-first static portfolio built with Astro and deployed through GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Content and media

- Project case studies live in `src/content/projects/` as MDX entries. Their frontmatter controls card metadata, media, and approved public links.
- Public links are centralized in `src/config/site.ts`.
- Add only approved public media to `public/media/`. The DialogTree source video is intentionally not part of this repository; `dialogtree-preview.mp4` is the compressed web derivative.

## Deployment

Push `main` to GitHub. In the repository’s Pages settings, select **GitHub Actions** as the source. The included workflow detects whether the repository is a project site or a user site and builds with the corresponding base path.
