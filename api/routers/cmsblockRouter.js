const express = require('express');
const CMSBlockController = require('../controllers/cmsblockController');

class CMSBlockRouter {

  constructor() {
    this.router = express.Router();
    this.controller = new CMSBlockController();
    this.routes();
  }

  routes() {
    this.router.get('/', this.controller.getCMSBlocks);
    this.router.get('/:id', this.controller.getCMSBlock);
    this.router.post('/', this.controller.createCMSBlock);
    this.router.patch('/:id', this.controller.patchCMSBlock);
    this.router.delete('/:id', this.controller.deleteCMSBlock);
  }
}

module.exports = CMSBlockRouter;
