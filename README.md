# jwd.me

The content and generated output for [jwd.me](https://jwd.me) — a Markdown
notebook published with [Onyx](https://github.com/jwd83/onyx).

`docs/` is the source of truth. The build renders it to `index.html` (the
homepage) and `public/` (every other page plus assets).

## Build

Onyx now lives in its own repo
([jwd83/onyx](https://github.com/jwd83/onyx), module `onyx.jwd.me`). Install it
once (the command is named `onyx`), then run it from this directory:

```sh
go install onyx.jwd.me/onyx@latest
onyx
```

Or run it without installing:

```sh
go run onyx.jwd.me/onyx@latest
```

Until the `onyx.jwd.me` vanity domain is live, build from a local checkout of
the tool instead:

```sh
git clone https://github.com/jwd83/onyx ../onyx
go -C ../onyx install ./onyx   # puts `onyx` on your PATH
onyx                           # build this site from this directory
```

See the [Onyx README](https://github.com/jwd83/onyx#readme) for configuration
and theming options.

The root `.nojekyll` file tells GitHub Pages to serve the generated static files
directly instead of running Jekyll over the repo.
