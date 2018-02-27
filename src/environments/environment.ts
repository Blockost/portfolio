// This file is an exemple of what the environment file will look like
// depending on the environment used during build.

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.dev.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// Because we cannot use `process.env` to retrieve environment variables while
// using angular-cli to serve the app, env vars are dynamically genereted using
// the `set-env.ts` script at build time.
export const environment = {
  production: false,
  github_read_token: ''
};
