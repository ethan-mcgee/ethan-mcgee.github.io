import { site } from '../content/site'

export default function Contact() {
  const { email, github, linkedin, resume } = site.links
  return (
    <ul className="contact-links">
      {email && <li><a href={`mailto:${email}`}>{email}</a></li>}
      {github && <li><a href={github}>GitHub</a></li>}
      {linkedin && <li><a href={linkedin}>LinkedIn</a></li>}
      {resume && <li><a href={resume}>Résumé (PDF)</a></li>}
    </ul>
  )
}
