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
  { href: '/stack', label: 'Stack' },
  { href: '/about', label: 'About' },
  { href: 'mailto:tyler@strategylabs.us', label: 'Contact ↗', external: true },
]

function Nav() {
  const { pathname } = useRouter()
  return (
    <nav className="site-nav">
      <ul>
        {NAV.map((item) => {
          const isActive =
            !item.external &&
            (item.href === '/'
              ? pathname === '/'
              : pathname === item.href || pathname.startsWith(item.href + '/'))
          if (item.external) {
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link"
                  rel="noopener"
                >
                  {item.label}
                </a>
              </li>
            )
          }
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`nav-link${isActive ? ' active' : ''}`}
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
    <>
      <Nav />
      <main className="site-main">
        <div className="container">
          <article className="prose">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  )
}
