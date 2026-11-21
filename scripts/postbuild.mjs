// GitHub Pages serves static files only, so a hard refresh on /projects/<slug>
// would 404. Copy the app shell to every route path, and to 404.html for
// anything else, so React Router can take over.
import { copyFileSync, mkdirSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const dist = 'dist'
const shell = join(dist, 'index.html')

const slugs = readdirSync('src/content/projects')
  .filter((f) => f.endsWith('.mdx') && !f.startsWith('_'))
  .map((f) => f.replace(/\.mdx$/, ''))

for (const slug of slugs) {
  const dir = join(dist, 'projects', slug)
  mkdirSync(dir, { recursive: true })
  copyFileSync(shell, join(dir, 'index.html'))
}
copyFileSync(shell, join(dist, '404.html'))

console.log(`postbuild: wrote ${slugs.length} project pages and 404.html`)
