# ethan-mcgee.github.io

My portfolio site. React, Vite and MDX, deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Run it

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check and build to dist/
npm run preview   # serve the built site
```

## Adding a project

1. Copy `src/content/projects/_template.mdx` to `src/content/projects/<slug>.mdx`. The file name becomes the URL: `/projects/<slug>`.
2. Fill in the frontmatter (title, summary, role, dates, stack, repo, order) and write the case study below it in Markdown.
3. Put any screenshots in `public/projects/<slug>/` and reference them as `![Alt text](/projects/<slug>/shot.png)`.

That's all. The home page and the project page pick it up automatically. Set `featured: false` to keep a page without listing it on the home page.

## Personal details

Name, tagline, about text, skills and contact links are in `src/content/site.ts`. Empty links are hidden.

## How deep links work on GitHub Pages

Pages only serves static files, so `scripts/postbuild.mjs` copies `index.html` to `projects/<slug>/index.html` for every project, and to `404.html`. A hard refresh on any project page then loads the app, and React Router renders the right page.
