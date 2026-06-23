# jwd.me

This repo is a Markdown notebook published with Onyx.

Onyx is intentionally tiny: one `onyx.go` file, one `onyx.ini` file, no third-party Go modules, no npm, no build system, and no runtime server.

## Build

```sh
go run onyx.go
```

The build reads `onyx.ini`, renders the vault in `docs/`, writes the homepage to `index.html`, and writes generated assets/pages to `public/`.

`docs/` remains the source of truth.

Generated links are relative, so the site works from a GitHub Pages project URL such as `/jwd.me/` without hardcoded root paths like `/public/onyx.js`.

The root `.nojekyll` file tells GitHub Pages to serve the generated static files directly instead of running Jekyll over the repo.
