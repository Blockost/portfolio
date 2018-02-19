import { writeFile, existsSync } from 'fs';
import { argv } from 'yargs';

const dotenv = require('dotenv');
const envPath = 'src/environments/.env';

if (!existsSync(envPath)) {
    console.log(`${envPath} not found. You must have an environment file.`);
    process.exit(0);
}

// Load env variables in the .env file into process.env object
dotenv.config({path: envPath});

if (argv.env === undefined) {
    console.log('You must specify an environment using --env={YOUR_ENV}');
    process.exit(0);
}

// Is be passed to script like this:
// `ts-node set-env.ts --env=dev`
// Get it from yargs's argv object
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
