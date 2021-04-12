/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable no-console */
/* eslint-disable import/named */
import http from 'http';
import { env, port, ip, apiRoot } from './config';
import express from './services/express';
import api from './api';

const app = express(apiRoot, api);
const server = http.createServer(app);

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log(
      `Express server listening on http://${ip}:${port}, in ${env} mode`
    );
  });
});

export default app;
