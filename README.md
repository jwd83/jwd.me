# jwd.me

This repo is a Markdown notebook published with Onyx.

Onyx is intentionally tiny: one `onyx.go` file, no config file required, no third-party Go modules, no npm, no build system, and no runtime server.

## Build

```sh
go run onyx.go
```

The build finds the site root (the nearest directory containing a `docs/` folder), renders the vault in `docs/`, writes the homepage to `index.html`, and writes generated assets/pages to `public/`.

`docs/` remains the source of truth.

## Configuration

There is no config file. The defaults are the convention:

| Setting | Default |
| --- | --- |
| Source folder | `docs/` |
| Site title | the `docs/index.md` title (frontmatter `title:` or first `# heading`), falling back to `Onyx` |
| Theme overrides | `theme/` if present, otherwise the built-in CSS, JS, and templates |
| Search, graph, and Markdown-source links | on |

Everything is optional. If a `theme/` folder exists it overrides the built-in
`style.css`, `onyx.js`, `page.html`, and `home.html`; per-note `publish: false`
or `draft: true` frontmatter excludes a note from the build.

An `onyx.ini` at the site root is still honored if you want to override the
defaults — it can set `site_title`, `source`, `theme`, and the `search`,
`graph`, and `show_source` toggles — but it is no longer needed.

Generated links are relative, so the site works from a GitHub Pages project URL such as `/jwd.me/` without hardcoded root paths like `/public/onyx.js`.

The root `.nojekyll` file tells GitHub Pages to serve the generated static files directly instead of running Jekyll over the repo.
