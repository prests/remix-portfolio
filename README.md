# Remix Portfolio &middot; [![E2E Tests](https://github.com/prests/remix-portfolio/actions/workflows/e2e.yaml/badge.svg?branch=main&event=push)](https://github.com/prests/remix-portfolio/actions/workflows/e2e.yaml?query=branch:main+event:push) [![CI Tests](https://github.com/prests/hono-remix-template/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/prests/hono-remix-template/actions/workflows/ci.yaml?query=branch:main+event:push)

Welcome to my portfolio built on Hono and Remix! I like to play around with new frameworks and technology and this is
one I've been working with recently! If you like this build be sure to checkout
[the template](https://github.com/prests/hono-remix-template) I made to make your own; or fork this one!

> 📧 **Note:** If you like what you see and would like to get in contact with me please email me at
> shayne.preston@protonmail.com

## Setup

### Install Setup NVM, PNPM, and Dependencies

I find [NVM](https://github.com/nvm-sh/nvm) to be a great way to switch between node versions when working on multiple
projects. Whether it's node v20, v18, or v8 NVM can quickly swap node versions!

Once NVM is setup run the following:

```sh
nvm install
npm i -g pnpm@^8
pnpm install
```

Alternatively, you can use [corepack](https://github.com/nodejs/corepack) to manage your package management.

After running `pnpm install` various lifecycle scripts will run to setup git hooks and certificates to utilize https for
the dev server.

### Setting Up Localhost

You'll need to modify your operating system's host file to include `local.example-test.com` this is helps with CORS and
CSP issues that can come up when just using `localhost` or `127.0.0.1`.

### Setting Up Environment Variables

Most production applications require environment variables to configure settings securely. We’ll set up a `.env` file to
inject variables locally, making them accessible via process.env. This template also uses [Zod](https://zod.dev/) to
ensure type safety when loading these variables.

1. Create a `.env` file at the root of the project and add the following values:

```sh
ABORT_DELAY=5000
```

2. These variables are now accessible on the `process.env` object when the server starts and validated with Zod to catch
   any type issues early.

### Running Dev Server

To start the dev server run the following and navigate to the url provided in the terminal:

```sh
pnpm dev
```

## Testing

- **Unit/Integration Tests:** Run the following to test individual components or functions in isolation:

```sh
pnpm test
```

- **End-to-End (E2E) Tests:** Run the following to simulate user interactions across different browsers:

```sh
pnpm test:e2e:local
```

## Linting, Formatting, and Typechecking

Most IDEs will take in the provided eslint and prettier configs and automatically format files on save. If not running
the following will check to make sure there are no styling issues:

```sh
pnpm lint # eslint check
pnpm format:verify # prettier check
pnpm typecheck # typechecking
```
