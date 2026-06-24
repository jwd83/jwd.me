# jwd.me

The content and generated output for [jwd.me](https://jwd.me) — a Markdown
notebook published with [Onyx](https://github.com/jwd83/onyx).

`docs/` is the source of truth. The build renders it to `index.html` (the
homepage) and `public/` (every other page plus assets).

## Build

Build this bad boy from the repo root with the Onyx one-liner:

```sh
go run onyx.jwd.me/onyx@latest
```

That command uses the latest Onyx module directly, so no local install is
required. If you do want the reusable `onyx` command on your `PATH`, install it
once and then run it from this directory:

```sh
go install onyx.jwd.me/onyx@latest
onyx
```

See the [Onyx README](https://github.com/jwd83/onyx#readme) for configuration
and theming options.

The root `.nojekyll` file tells GitHub Pages to serve the generated static files
directly instead of running Jekyll over the repo.
