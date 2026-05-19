# AGENTS.md

## Project overview

This repository is a personal career/life operating site for Tyler Borjeson, built with Next.js and Nextra. It is intended to be both:

1. A public-facing personal website / portfolio / resume / now page.
2. A private-first working knowledge base that helps Tyler and AI agents organize career context, projects, work history, goals, stack, preferences, and ongoing priorities.

Treat this repo as a living source of truth for Tyler's professional identity and career-related context. Content should be easy for humans to read and easy for agents to navigate, summarize, update, and reuse.

## Tech stack

- Framework: Next.js
- Content system: Nextra using MDX files
- Theme: `nextra-theme-docs`
- Package manager: pnpm
- Main config files:
  - `next.config.mjs`
  - `theme.config.tsx`
  - `tsconfig.json`
  - `package.json`

## Content location

The primary content lives in the `pages/` directory as `.mdx` files. Yes: the markdown-like content is the `.mdx` content.

Current main pages:

- `pages/index.mdx` — homepage / short intro
- `pages/context.mdx` — high-signal context about Tyler, working style, values, preferences, operating principles
- `pages/work.mdx` — resume/work history/accomplishments
- `pages/projects.mdx` — projects, builds, experiments, shipped work
- `pages/now.mdx` — current focus, priorities, active projects, learning, constraints
- `pages/stack.mdx` — tools, hardware, software, AI stack, preferred workflows
- `pages/about.mdx` — longer personal/professional story
- `pages/contact.mdx` — contact links and preferred ways to reach Tyler

Navigation and page metadata are controlled by:

- `pages/_meta.ts`

Global theme/site configuration is controlled by:

- `theme.config.tsx`

## How to run locally

Install dependencies:

```bash
pnpm install
```

Start the dev server:

```bash
pnpm dev
```

Then open:

```text
http://localhost:3000
```

Build check:

```bash
pnpm build
```

## Editing guidelines for agents

When editing this repo:

- Prefer editing `.mdx` files in `pages/` for content changes.
- Keep content clear, direct, and useful. Avoid vague marketing language.
- Preserve Tyler's voice where possible: practical, specific, candid, and high-signal.
- Use headings and bullets generously so pages are easy to skim.
- Favor factual updates over embellished prose.
- If adding claims about Tyler's work, projects, or experience, mark uncertain details as placeholders unless Tyler has provided the facts.
- Do not invent employment history, credentials, metrics, personal details, or project outcomes.
- If information is missing, leave a clear placeholder like `[TODO: add specific role/project/result]`.
- Keep public/private sensitivity in mind. If something seems personal, confidential, or employer-sensitive, ask before publishing it in a public page.

## Content philosophy

This repo should help Tyler answer questions like:

- What am I working on right now?
- What have I built?
- What have I learned?
- What do I want agents to know about me?
- What career story am I telling?
- What tools and workflows do I actually use?
- What context should collaborators, recruiters, clients, and future agents have?

The site should become a structured memory layer for career context, not just a static portfolio.

## Suggested content conventions

Use these patterns when adding or updating content:

- Dates: prefer `YYYY-MM` or `YYYY-MM-DD` where precision matters.
- Projects: include status, purpose, stack, links, and current next step.
- Work history: include role, company, dates, scope, and concrete accomplishments.
- Now page: keep it current and lightweight; update often.
- Stack page: include why a tool is used, not only what it is.
- Context page: capture durable preferences, constraints, working style, principles, and agent-useful notes.

## Repository structure

```text
.
├── AGENTS.md             # Agent instructions and project context
├── README.md             # Original Nextra template README
├── components/           # React components used by MDX/pages
├── next.config.mjs       # Nextra + Next.js config
├── package.json          # Scripts and dependencies
├── pages/                # Main MDX content and routes
│   ├── _app.tsx
│   ├── _meta.ts
│   ├── index.mdx
│   ├── context.mdx
│   ├── work.mdx
│   ├── projects.mdx
│   ├── now.mdx
│   ├── stack.mdx
│   ├── about.mdx
│   └── contact.mdx
├── theme.config.tsx      # Nextra theme/site config
└── tsconfig.json
```

## Notes for future agents

Tyler wants this repo to become a personal, career-oriented knowledge base and website. Before making large structural changes, prefer asking. For small content edits, update the relevant `.mdx` file directly and keep the structure simple.

If asked where content lives, answer: mostly in `pages/*.mdx`, with navigation in `pages/_meta.ts` and theme/site chrome in `theme.config.tsx`.
