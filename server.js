require('dotenv').config();
const API = require('./api');
const next = require('next');
const { parse } = require('url');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './client' });
const handle = app.getRequestHandler();
const port = process.env.PORT || 8080;

app.prepare().then(() => {
  const server = express();
  const api = new API(server);

  server.get('/dashboard', (req, res) => {
    if(req.isAuthenticated()) {
      return handle(req, res);
    } else {
      res.redirect('/dashboard/login')
    }
  });

  server.get('/dashboard/login', (req, res) => {
    if(req.isAuthenticated()) {
      res.redirect('/dashboard');
    } else {
      return handle(req, res);
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  })

  server.listen(port, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:' + port);
  })
})
