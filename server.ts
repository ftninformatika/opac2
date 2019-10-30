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

import * as express from 'express';
import {join} from 'path';
// import * as fetch from 'node-fetch';
import * as url from 'url';
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// Express server
const app = express();
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist/browser');
const axios = require('axios');

// CORS settings
const cors = require('cors');
// const whitelist = ['https://polar-surfer-257418.appspot.com',
// 'http://polar-surfer-257418.appspot.com', 'https://opac2.herokuapp.com', 'http://opac2.herokuapp.com'];
// const corsOptions = {
//   origin(origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   }
// };

app.use(cors());

// const appUrl = 'bisis5-opac2.firebaseapp.com';
const appUrl = 'localhost:4000';
const renderUrl = 'http://localhost:3000/render';
// const appUrl = 'opac2.herokuapp.com';
// const renderUrl = 'https://polar-surfer-257418.appspot.com/render';
const fetch = require('node-fetch');

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


// All regular routes use the Universal engine
app.get('*', (req, res) => {
  if (!detectBot(req.headers['user-agent'])) {
    res.render('index', {req});
  } else {
    const botUrl  = generateUrl(req);
    console.log('Sending route to Rendertron');
    axios.get(`${renderUrl}/${botUrl}`)
      .then(response => {
        res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
        res.set('Vary', 'User-Agent');
        let renderedHtml = response.data;
        renderedHtml = renderedHtml.replace(/<style.*<\/style>/g, '');
        const fake = '<html><head><meta property="og:type" content="book">\n' +
          '        <meta property="og:url" content="https://test.bisis.app/book/bgb/5baf84d456d169f0e1df958e">\n' +
          '        <meta property="og:image" content="http://test.bisis.app/bisisWS/book_cover/retrieve/20772"></head><body></body></html>';
        res.send(fake);
      })
      .catch(error => {
        console.log(error);
      });
  }
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
