import * as dotenv from 'dotenv';
import { existsSync, writeFile } from 'fs';
import { argv } from 'yargs';

const getEnv = (key: string): string => {
  console.log(`Retrieving ${key} environment variable`);
  const env = process.env[key];
  if (env === undefined) {
    throw new Error(`Could not retrieve ${key} environment variable`);
  }

  return env;
};

// Path to .env file (local only, not committed) containing environment variables
const envPath = 'src/environments/.env';

if (!existsSync(envPath)) {
  console.log(
    `${envPath} not found. Assuming environment variables are set in the system.`
  );
} else {
  // Load env variables from the .env file into process.env object
  dotenv.config({ path: envPath });
}

if (argv.env === undefined) {
  console.log('You must specify an environment using --env={YOUR_ENV}');
  process.exit(0);
}

// Get it from yargs's argv object
// Passed like this: `ts-node set-env.ts --env=dev`
// TODO: 2018-07-03 Renamed env to configuration once project is
// upgraded to Angular 6. Don't forget to edit package.json!
const environment = argv.env;
const isProd = environment === 'prod';
const GITHUB_READ_TOKEN = getEnv('GITHUB_READ_TOKEN');

const configFile = `./src/environments/environment.${environment}.ts`;
const configContent = `export const environment = {
    production: ${isProd},
    github_read_token: '${GITHUB_READ_TOKEN}'
};\n`;

writeFile(configFile, configContent, (err: any) => {
  if (err) {
    console.log(err);
  }
  console.log(`Output generated at ${configFile}`);
});
