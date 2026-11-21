import type { ComponentType } from 'react'

/** Frontmatter at the top of each file in src/content/projects. */
export interface ProjectFrontmatter {
  title: string
  /** One sentence shown on the home page. */
  summary: string
  /** e.g. "Freelance, sole developer" or "Course project, team of 4" */
  role: string
  /** e.g. "Jul 2026 – Present" */
  dates: string
  stack: string[]
  /** Public source link. Leave out for private code. */
  repo?: string
  /** Live demo or other link. */
  link?: string
  /** Shown on the home page unless set to false. */
  featured?: boolean
  /** Lower numbers come first. */
  order?: number
}

export interface Project extends ProjectFrontmatter {
  slug: string
  Content: ComponentType
}

type MdxModule = { default: ComponentType; frontmatter: ProjectFrontmatter }

// Every .mdx file in the folder becomes a project. Files starting with "_" are ignored.
const modules = import.meta.glob<MdxModule>('../content/projects/*.mdx', { eager: true })

export const projects: Project[] = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.split('/').pop()!.replace(/\.mdx$/, ''),
    ...mod.frontmatter,
    Content: mod.default,
  }))
  .filter((p) => !p.slug.startsWith('_'))
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.title.localeCompare(b.title))

export const featuredProjects = projects.filter((p) => p.featured !== false)

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
