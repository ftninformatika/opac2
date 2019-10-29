// const functions = require('firebase-functions');
// tslint:disable-next-line:no-implicit-dependencies
const zone = require('zone.js/dist/zone-node');
const express = require('express');
// tslint:disable-next-line:no-implicit-dependencies
// @ts-ignore
// tslint:disable-next-line:no-implicit-dependencies
const fetch = require('node-fetch');
const url = require('url');
const app = express();
const join = require('path');

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join.join(process.cwd(), 'dist/browser');
const appUrl = 'opac2-7c9ff.firebaseapp.com';
// Rendertrone gcloud instance
const renderUrl = 'https://polar-surfer-257418.appspot.com//render';

const {AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap} = require('./dist/server/main');

function generateUrl(request) {
  return url.format({
    protocol: request.protocol,
    host: appUrl,
    pathname: request.originalUrl
  })
}

function detectBot(userAgent) {
  const bots = [
    // Crawler bots
    'googlebot',
    'bingbot',
    'yandexbot',
    'duckduckbot',
    'slurp',
    // Link bots
    'twitterbot',
    'facebookexternalhit',
    'linkedinbot',
    'embedly',
    'baiduspider',
    'pinterest',
    'slackbot',
    'vkShare',
    'facebot',
    'outbrain',
    'W3C_Validator'
  ];

  const agent = userAgent.toLowerCase();
  for (const bot of bots) {
    if (agent.indexOf(bot) > -1) {
      console.log('Detected bot', bot, agent);
      return true;
    }
  }
  console.log('No bots detected');
  return false;
}
app.set('view engine', 'html');
app.set('views', DIST_FOLDER);
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));
app.get('*', (req, res) => {
  const isBot = detectBot(req.headers['user-agent']);

  if (isBot) {
    const botUrl = generateUrl(req);

    fetch(`${renderUrl}/${botUrl}`)
    // tslint:disable-next-line:no-shadowed-variable
      .then(res => res.text())
      .then(body => {
        res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
        res.set('Vary', 'User-Agent');
        res.send(body.toString());
      })
      .catch(
        err => console.log(err.toString())
      )
  } else {
    fetch(`https://${appUrl}`)
    // tslint:disable-next-line:no-shadowed-variable
      .then(res => res.text())
      .then(body => {
        res.send(body.toString());
      })
      .catch(
        err => console.log(err.toString())
      )
  }
});

app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
// app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));
// exports.app = functions.https.onRequest(app);
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
