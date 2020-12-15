const express = require('express');
const auth = require('../utils/auth');
const EnquiryController = require('../controllers/enquiryController');

class EnquiryRouter {

  constructor() {
    this.router = express.Router();
    this.controller = new EnquiryController();
    this.routes();
  }

  routes() {
    this.router.get('/', auth.adminEndpoint, this.controller.getEnquirys);
    this.router.get('/:id', auth.adminEndpoint, this.controller.getEnquiry);
    this.router.post('/', this.controller.createEnquiry);
    this.router.patch('/:id', auth.adminEndpoint, this.controller.patchEnquiry);
    this.router.delete('/:id', auth.adminEndpoint, this.controller.deleteEnquiry);
  }
}

module.exports = EnquiryRouter;
