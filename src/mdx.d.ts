declare module '*.mdx' {
  import type { ComponentType } from 'react'
  import type { ProjectFrontmatter } from './lib/projects'
  export const frontmatter: ProjectFrontmatter
  const MDXContent: ComponentType
  export default MDXContent
}
