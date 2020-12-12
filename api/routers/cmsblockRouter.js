const express = require('express');
const auth = require('../utils/auth');
const CMSBlockController = require('../controllers/cmsblockController');

class CMSBlockRouter {

  constructor() {
    this.router = express.Router();
    this.controller = new CMSBlockController();
    this.routes();
  }

  routes() {
    this.router.get('/', auth.adminEndpoint, this.controller.getCMSBlocks);
    this.router.get('/:id', auth.adminEndpoint, this.controller.getCMSBlock);
    this.router.post('/', auth.adminEndpoint, this.controller.createCMSBlock);
    this.router.patch('/:id', auth.adminEndpoint, this.controller.patchCMSBlock);
    this.router.delete('/:id', auth.adminEndpoint, this.controller.deleteCMSBlock);
  }
}

module.exports = CMSBlockRouter;
