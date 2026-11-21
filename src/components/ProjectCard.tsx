import { Link } from 'react-router-dom'
import type { Project } from '../lib/projects'
import TagList from './TagList'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="meta">
        <span>{project.role}</span>
        <span>{project.dates}</span>
      </div>
      <h3>
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>
      <p>{project.summary}</p>
      <TagList items={project.stack} />
      <p className="card-links">
        <Link to={`/projects/${project.slug}`}>Read the case study →</Link>
        {project.repo && <a href={project.repo}>Source</a>}
        {project.link && <a href={project.link}>Live</a>}
      </p>
    </article>
  )
}
