/***************************************************************************************************
 * Load `$localize` onto the global scope - used if i18n tags appear in Angular templates.
 */
import '@angular/localize/init';
import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

import { enableProdMode } from '@angular/core';
import * as url from 'url';
import { environment } from './src/environments/environment';
(global as any).self = { fetch: require('node-fetch') };
(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
(global as any).crypto = (global as any).crypto ||
  (global as any).msCrypto || {
    getRandomValues: (array) => {
      for (let i = 0, l = array.length; i < l; i++) {
        array[i] = Math.floor(Math.random() * 256);
      }
      return array;
    },
  };

if (crypto.getRandomValues === undefined) {
  throw new Error('crypto is not supported on this browser');
}

(global as any).crypto = (global as any).crypto ||
  (global as any).msCrypto || {
    getRandomValues: (array) => {
      for (let i = 0, l = array.length; i < l; i++) {
        array[i] = Math.floor(Math.random() * 256);
      }
      return array;
    },
  };

if (crypto.getRandomValues === undefined) {
  throw new Error('crypto is not supported on this browser');
}

// enableProdMode();
export function app(distPath: string): express.Express {
  const app = express();
  const distFolder = join(process.cwd(), distPath);
  const axios = require('axios');
  // CORS settings
  const cors = require('cors');
  app.use(cors());
  const appUrl = 'opac.bisis.rs';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  app.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  if (typeof window === 'undefined') {
    (global as any).window = {};
    (global as any).window.addEventListener = () => {};
  }

  app.set('view engine', 'html');
  app.set('views', distFolder);

  // Example Express Rest API endpoints
  // app.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  app.get(
    '*.*',
  express.static(distFolder, {
    maxAge: '1y',
  }));

  function generateUrl(request) {
    return url.format({
      protocol: request.protocol,
      host: appUrl,
      pathname: request.originalUrl,
    });
  }

  // Helper function to check if user-agent is bot
  const detectBot = (userAgent) => {
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
      'viber',
      'facebot',
      'facebook',
      'fban/messenger',
      'facebookplatform'
    ];

    const agent = userAgent.toLowerCase();
    for (const bot of bots) {
      if (agent.indexOf(bot) > -1) {
        console.log('Detected bot', bot, agent);
        return true;
      }
    }
    // console.log('No bots detected');
    return false;
  }

  // TODO: add other link-bots
  const isExternalHit = (userAgent: string) =>  {
    return (
      (userAgent &&
        userAgent.toLowerCase().indexOf('facebook') > -1) ||
      userAgent.toLowerCase().indexOf('viber') > -1 ||
      userAgent.toLowerCase().indexOf('linkedin') > -1 ||
      userAgent.toLowerCase().indexOf('twitter') > -1 ||
      detectBot(userAgent)
    );
  }

  // All regular routes use the Universal engine
  app.get('*', (req, res) => {
    // console.log(req);
    console.log(APP_BASE_HREF);
    const urlParam = generateUrl(req);
    if (isExternalHit(req.headers['user-agent']) && urlParam.indexOf('book') > -1) {
      console.log('external HITT!, ua,', req.headers['user-agent']);
      axios
        .get(`https://app.bisis.rs/bisisWS/external_hit?url=${urlParam}`)
        .then((response) => {
          res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
          res.set('Vary', 'User-Agent');
          res.send(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
        // console.log('No bot, ua:', req.headers['user-agent']);
        res.render('index', {
          req,
        });
    }
  });

  return app;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = express();
  // Paths to per locale builds
  const app0 = app('dist/browser/sr-Cyrl');
  const app1 = app('dist/browser/sr-Latn');
  const app2 = app('dist/browser/en');
  server.use('/sr-Cyrl', app0);
  server.use('/sr-Latn', app1);
  server.use('/en', app2);
  server.use('/', app0);
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
run();

export * from './src/main.server';
