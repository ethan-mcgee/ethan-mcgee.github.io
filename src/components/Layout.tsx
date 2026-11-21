import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { site } from '../content/site'

export default function Layout() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="page">
      <header className="site-header">
        <Link to="/" className="site-name">{site.name}</Link>
        <nav>
          <Link to="/#projects">Projects</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} {site.name}
      </footer>
    </div>
  )
}
