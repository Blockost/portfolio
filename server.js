const express = require('express');
const path = require('path');
const app = express();

/*
 * In production, the application cannot be deployed
 * using the `ng serve` command of `angular-cli`.
 * Therefore, the `dist/` (build using `ng build --prod`)
 * directory needs to be served as static content using
 *  a standard nodeJS express server
 */
app.use(express.static(path.join(__dirname, '/dist')));

// Redirect all routes to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

const PORT = process.env.APP_PORTFOLIO_PORT;
if (!PORT) {
  throw new Error('PORT is not defined');
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
