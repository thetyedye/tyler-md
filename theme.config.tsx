import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>tyler.md</span>,
  project: {
    link: 'https://github.com/tylerborjeson',
  },
  docsRepositoryBase: 'https://github.com/tylerborjeson/tyler-md',
  search: {
    placeholder: 'Search…',
  },
  footer: {
    text: (
      <span>
        © {new Date().getFullYear()} Tyler Borjeson. Built with{' '}
        <a href="https://nextra.site" target="_blank" rel="noreferrer">
          Nextra
        </a>
        .
      </span>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
  },
  darkMode: true,
  primaryHue: 200,
  primarySaturation: 60,
  feedback: {
    content: null,
  },
  editLink: {
    content: null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s — tyler.md',
    }
  },
}

export default config
