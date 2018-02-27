import { writeFile, existsSync } from 'fs';
import { argv } from 'yargs';

// Load dotenv module
const dotenv = require('dotenv');
// Path to .env file containing environment variables
const envPath = 'src/environments/d.env';

if (!existsSync(envPath)) {
    console.log(`${envPath} not found. Assuming environment variables are set in the system.`);
} else {
    // Load env variables from the .env file into process.env object
    dotenv.config({ path: envPath });
}

if (argv.env === undefined) {
    console.log('You must specify an environment using --env={YOUR_ENV}');
    process.exit(0);
}

// Get it from yargs's argv object
// Passed liked this: `ts-node set-env.ts --env=dev`
const environment = argv.env;
const isProd = environment === 'prod';

const configFile = `./src/environments/environment.${environment}.ts`;
const configContent = `export const environment = {
    production: ${isProd},
    github_read_token: '${process.env.GITHUB_READ_TOKEN}'
};\n`;

writeFile(configFile, configContent, (err: any) => {
    if (err) {
        console.log(err);
    }
    console.log(`Output generated at ${configFile}`);
});
