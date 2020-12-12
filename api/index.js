require('./utils/passportUtil');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const AdminRouter = require('./routers/adminRouter');
const SessionRouter = require('./routers/sessionRouter');
const CMSBlockRouter = require('./routers/cmsblockRouter');
const MongoDBStore = require('connect-mongodb-session')(session);

mongoose.set('useFindAndModify', false);

const SECRET = process.env.SECRET || 'randomstring';
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
    const store = new MongoDBStore({
      uri: MONGODB_URL,
      collection: 'apisessions'
    });

    this.app.use(bodyParser.urlencoded({ extended: false }))
    this.app.use(bodyParser.json());
    this.app.use(session({
      genid: (req) => {
        return uuidv4() // use UUIDs for session IDs
      },
      store: store,
      secret: SECRET,
      resave: false,
      httpOnly: true,
      saveUninitialized: true
    }));
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  routes() {
    this.app.use('/api/sessions', new SessionRouter().router);
    this.app.use('/api/admins', new AdminRouter().router);
    this.app.use('/api/cmsblocks', new CMSBlockRouter().router);
  }
}

module.exports = API;
