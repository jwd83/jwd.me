# AGENTS.md

## Workspace Purpose
This repository powers [jwd.me](https://jwd.me) using Quartz v4 as a static site generator.
The content is an Obsidian-style personal journal / digital garden published as a personal website.

## Tech and Runtime
- Quartz v4 (`@jackyzha0/quartz`, Node 18.14+)
- Markdown content source in `content/`
- Config and layout in `quartz.config.ts` and `quartz.layout.ts`
- Plausible analytics enabled in site config

## Repository Map
- `content/`: published notes (primary source of truth)
- `content/index.md`: site home note
- `content/Projects.md`, `content/Quotes.md`: root-level hub notes
- `content/Games`, `content/Movies`, `content/Music`, `content/Books`, `content/People`, `content/Concepts`, `content/Technology`: primary topic roots
- `content/Concepts/{Health, Mythology, Time}`: concept subtrees
- `content/Games/{Consoles, MTG, Baldur's Gate 3}`: game-related subtrees
- `content/Technology/{Programming, Networking, Hardware Description Languages, File and Document Formats}`: tech subtrees
- `quartz.config.ts`: site title, theme, plugins, ignore patterns, base URL
- `quartz.layout.ts`: page component layout (graph, TOC, backlinks, explorer)
- `quartz/`: Quartz engine and components
- `docs/`: Quartz upstream documentation site content
- `public/`: generated output (ignored by git)

## Content Conventions Observed
- Notes are organized by topic folders (for example: `Games`, `Concepts`, `Technology`, `People`, `Books`, `Movies`, `Music`).
- A small number of root-level notes are used as hubs/indexes (for example: `Projects.md`, `Quotes.md`, `index.md`).
- Some topics are deeply nested (for example under `Games/Consoles` and `Technology/Programming`).
- Most notes are plain Markdown without frontmatter; Obsidian wikilinks are used heavily.
- Link style to preserve: `[[Note Name]]` and alias links like `[[Programming Languages|computer programmer]]`.
- File names include spaces, apostrophes, and symbols; keep names stable to avoid breaking links.

## General Writing Guideline (Loose, House Style)
- Write like a person taking practical notes, not like polished docs.
- Keep tone direct and conversational; first-person is fine when natural.
- Favor clarity over strict grammar perfection. Minor rough edges are acceptable.
- Mix short stubs and long deep-dives based on topic value.
- Use headings to chunk ideas, then simple paragraphs or bullet lists.
- Prefer concrete examples, commands, and real-world context over abstract definitions.
- Use Obsidian wikilinks whenever a concept already has (or should have) a note.
- Include opinions and perspective where useful, especially in project/game/tech notes.
- For quote-heavy thinker notes, use blockquotes and short framing commentary.
- Do not over-normalize style across old and new notes; preserve the organic voice.

## Agent Editing Guidelines
- Treat `content/` as the user-authored knowledge base; preserve tone and intent.
- Make minimal, scoped edits. Do not do broad rewrites unless explicitly requested.
- Prefer adding or fixing internal links with Obsidian wikilinks.
- Do not rename or move note files unless asked.
- Do not edit Quartz engine files in `quartz/` unless the task is about site behavior/theme/build internals.
- Respect ignore/publish boundaries from config: `private`, `templates`, `.obsidian` are excluded from publish.

## Commands
- Install deps: `npm install`
- Local preview (content): `npx quartz build --serve`
- Build docs variant: `npm run docs`
- Type/lint formatting checks: `npm run check`
- Format: `npm run format`
- Test: `npm test`

## Notes for Future Agents
- This repo appears to be a customized Quartz instance used as a personal site, not just upstream Quartz docs.
- Prioritize content quality and internal knowledge graph integrity over framework-level changes.
