/**
 * *** NOTE ON IMPORTING FROM ANGULAR AND NGUNIVERSAL IN THIS FILE ***
 *
 * If your application uses third-party dependencies, you'll need to
 * either use Webpack or the Angular CLI's `bundleDependencies` feature
 * in order to adequately package them for use on the server without a
 * node_modules directory.
 *
 * However, due to the nature of the CLI's `bundleDependencies`, importing
 * Angular in this file will create a different instance of Angular than
 * the version in the compiled application code. This leads to unavoidable
 * conflicts. Therefore, please do not explicitly import from @angular or
 * @nguniversal in this file. You can export any needed resources
 * from your application's main.server.ts file, as seen below with the
 * import for `ngExpressEngine`.
 */

import 'zone.js/dist/zone-node';

import { enableProdMode } from '@angular/core';
import * as express from 'express';
import {join} from 'path';
import * as url from 'url';
import { environment } from './src/environments/environment';
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

enableProdMode();
console.log(environment);
// Express server
const app = express();
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');
const axios = require('axios');

// CORS settings
const cors = require('cors');

app.use(cors());

// const appUrl = 'bisis5-opac2.firebaseapp.com';
// const appUrl = 'localhost:4000';
// const renderUrl = 'http://localhost:3000/render';
const appUrl = 'opac.bisis.rs';
// const renderUrl = 'http://116.203.124.157/render';
// const renderUrl = 'https://polar-surfer-257418.appspot.com/render';

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {AppServerModuleNgFactory, LAZY_MODULE_MAP, ngExpressEngine, provideModuleMap} = require('./dist/server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(DIST_FOLDER, {
  maxAge: '1y'
}));


function generateUrl(request) {
  return url.format({
    protocol: request.protocol,
    host: appUrl,
    pathname: request.originalUrl
  });
}

// Helper function to check if user-agent is bot
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
    'w3c_validator',
    'viber'
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


// function isBookRoute(route: string) {
//   return (route && route.indexOf('book') > -1);
// }

// TODO: add other link-bots
function isExternalHit(userAgent: string) {
  return (userAgent && userAgent.toLowerCase().indexOf('facebookexternalhit') > -1 || userAgent.toLowerCase().indexOf('viber') > -1);
}

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  // console.log(req);
  if (!detectBot(req.headers['user-agent'])) {
    res.render('index', {req});
  } else if (isExternalHit(req.headers['user-agent'])) {
    console.log('external HITT!');
    const urlParam = generateUrl(req);
    axios.get(`${environment.baseUrl}/external_hit?url=${urlParam}`)
      .then(response => {
        res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
        res.set('Vary', 'User-Agent');
        res.send(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  // else {
  //   const botUrl  = generateUrl(req);
  //   console.log('Sending route to Rendertron');
  //   axios.get(`${renderUrl}/${botUrl}`)
  //     .then(response => {
  //       res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
  //       res.set('Vary', 'User-Agent');
  //       const renderedHtml = response.data;
  //       res.send(renderedHtml);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
