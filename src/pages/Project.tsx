import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import TagList from '../components/TagList'
import { site } from '../content/site'
import { getProject } from '../lib/projects'
import NotFound from './NotFound'

export default function Project() {
  const project = getProject(useParams().slug)

  useEffect(() => {
    if (project) document.title = `${project.title} · ${site.name}`
  }, [project])

  if (!project) return <NotFound />
  const { Content } = project

  return (
    <article className="case-study">
      <p className="back"><Link to="/#projects">← All projects</Link></p>
      <h1>{project.title}</h1>
      <p className="lede">{project.summary}</p>
      <dl className="facts">
        <div><dt>Role</dt><dd>{project.role}</dd></div>
        <div><dt>When</dt><dd>{project.dates}</dd></div>
        {(project.repo || project.link) && (
          <div>
            <dt>Links</dt>
            <dd className="fact-links">
              {project.repo && <a href={project.repo}>Source on GitHub</a>}
              {project.link && <a href={project.link}>Live</a>}
            </dd>
          </div>
        )}
      </dl>
      <TagList items={project.stack} />
      <div className="prose">
        <Content />
      </div>
      <p className="back"><Link to="/#projects">← All projects</Link></p>
    </article>
  )
}
