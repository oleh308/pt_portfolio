const express = require('express');
const SessionController = require('../controllers/sessionController');

class SessionRouter {

  constructor() {
    this.router = express.Router();
    this.controller = new SessionController();
    this.routes();
  }

  routes() {
    this.router.get('/', this.controller.getSessions);
    this.router.get('/:id', this.controller.getSession);
    this.router.post('/', this.controller.createSession);
    this.router.patch('/:id', this.controller.patchSession);
    this.router.delete('/:id', this.controller.deleteSession);
  }
}

module.exports = SessionRouter;
