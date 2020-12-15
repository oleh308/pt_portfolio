const express = require('express');
const auth = require('../utils/auth');
const ConfigurationController = require('../controllers/configurationController');

class ConfigurationRouter {

  constructor() {
    this.router = express.Router();
    this.controller = new ConfigurationController();
    this.routes();
  }

  routes() {
    this.router.get('/:page/:lang', this.controller.getPage);
    this.router.get('/', auth.adminEndpoint, this.controller.getConfigurations);
    this.router.get('/:id', auth.adminEndpoint, this.controller.getConfiguration);
    this.router.post('/', auth.adminEndpoint, this.controller.createConfiguration);
    this.router.patch('/:id', auth.adminEndpoint, this.controller.patchConfiguration);
    this.router.delete('/:id', auth.adminEndpoint, this.controller.deleteConfiguration);
  }
}

module.exports = ConfigurationRouter;
