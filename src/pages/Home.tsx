import { useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import Contact from '../components/Contact'
import { site } from '../content/site'
import { featuredProjects } from '../lib/projects'

export default function Home() {
  useEffect(() => {
    document.title = site.name
  }, [])

  return (
    <>
      <section className="intro">
        <h1>{site.name}</h1>
        <p className="lede">{site.tagline}</p>
      </section>

      <section id="projects">
        <h2>Selected projects</h2>
        {featuredProjects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>

      <section id="about">
        <h2>About</h2>
        {site.about.map((para) => (
          <p key={para}>{para}</p>
        ))}
        <dl className="skills">
          {site.skills.map((s) => (
            <div key={s.group}>
              <dt>{s.group}</dt>
              <dd>{s.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <Contact />
      </section>
    </>
  )
}
