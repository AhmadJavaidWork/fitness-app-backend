/* eslint-disable import/named */
import express from 'express';
import forceSSL from 'express-force-ssl';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';
import { env } from '../../config';

export default (apiRoot, routes) => {
  const app = express();
  app.use(passport.initialize());
  app.use(passport.session());

  if (env === 'production') {
    app.set('forceSSLOptions', {
      enable301Redirects: false,
      trustXFPHeader: true,
    });
    app.use(forceSSL);
  }

  if (env === 'production' || env === 'development') {
    app.use(compression());
    app.use(morgan('dev'));
  }
  if (env === 'production') {
    app.use(
      cors({
        credentials: true,
        origin: 'https://eatos.herokuapp.com',
      }),
    );
  } else {
    app.use(cors({ credentials: true, origin: 'http://localhost:8080' }));
  }
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(apiRoot, routes);

  return app;
};
