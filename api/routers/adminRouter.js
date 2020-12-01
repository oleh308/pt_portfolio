const express = require('express');
const AdminController = require('../controllers/adminController');

class AdminRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new AdminController();
    this.routes();
  }

  routes() {
    this.router.post('/login', this.controller.login);
  }
}

module.exports = AdminRouter;
