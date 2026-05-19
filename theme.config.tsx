import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700 }}>tyler.md</span>,
  project: {
    link: 'https://github.com/thetyedye/tyler-md',
  },
  docsRepositoryBase: 'https://github.com/thetyedye/tyler-md',
  search: {
    placeholder: 'Search…',
  },
  footer: {
    content: (
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
  feedback: {
    content: null,
  },
  editLink: {
    content: null,
  },
}

export default config
