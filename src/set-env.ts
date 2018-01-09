import { writeFile } from 'fs';
import { argv } from 'yargs';

// Load env variables in the .env file into process.env object
require('dotenv').config({path: 'src/environments/.env'});

// Is be passed to script like this:
// `ts-node set-env.ts --environment=dev`
// Get it from yargs's argv object
const environment = argv.environment;
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
