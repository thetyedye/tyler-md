import type { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

type NavItem = { href: string; label: string; external?: boolean }

const NAV: NavItem[] = [
  { href: '/', label: "Hi, I'm Tyler" },
  { href: '/context', label: 'Context' },
  { href: '/work', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/the-lab', label: 'The Lab' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/now', label: 'Now' },

  { href: '/about', label: 'About' },
  { href: 'mailto:tyler@strategylabs.us', label: 'Contact ↗', external: true },
]

function isActiveFor(href: string, pathname: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

function Sidebar() {
  const { pathname } = useRouter()
  return (
    <aside className="site-sidebar">
      <div className="sidebar-inner">
        <Link href="/" className="sidebar-brand">
          Tyler Borjeson
        </Link>
        <nav>
          <ul className="sidebar-nav">
            {NAV.map((item) => {
              if (item.external) {
                return (
                  <li key={item.href}>
                    <a href={item.href} className="nav-link" rel="noopener">
                      {item.label}
                    </a>
                  </li>
                )
              }
              const active = isActiveFor(item.href, pathname)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link${active ? ' active' : ''}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </aside>
  )
}

function TopBar() {
  const { pathname } = useRouter()
  return (
    <nav className="site-topbar">
      <Link href="/" className="topbar-brand">
        Tyler Borjeson
      </Link>
      <ul>
        {NAV.map((item) => {
          if (item.external) {
            return (
              <li key={item.href}>
                <a href={item.href} className="nav-link" rel="noopener">
                  {item.label}
                </a>
              </li>
            )
          }
          const active = isActiveFor(item.href, pathname)
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`nav-link${active ? ' active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} Tyler Borjeson ·{' '}
        <a href="https://tyler.md">tyler.md</a>
      </p>
    </footer>
  )
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="site-shell">
      <Sidebar />
      <TopBar />
      <div className="site-body">
        <main className="site-main">
          <div className="container">
            <article className="prose">{children}</article>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
