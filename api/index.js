const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const SessionRouter = require('./routers/sessionRouter');

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/pt_portfolio';

class API {
  constructor(server) {
    this.app = server;
    this.db = this.mongo();
    this.middleware();
    this.routes();
  }

  mongo() {
    mongoose.connect(MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));

    return db;
  }

  middleware() {
    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json())
  }

  routes() {
    this.app.use('/api/sessions', new SessionRouter().router);
  }
}

module.exports = API;
