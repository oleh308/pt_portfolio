const CMSBlock = require('../models/cmsblock');

class CMSBlockController {
  async getCMSBlocks(req, res) {
    try {
      const cmsblocks = await CMSBlock.find({});
      return res.send(cmsblocks);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async getCMSBlock(req, res) {
    try {
      const cmsblock = await CMSBlock.findOne({ _id: req.params.id });
      if (!cmsblock) {
        return res.status(404).send({ message: 'CMSBlock not found' });
      } else {
        return res.send(cmsblock);
      }
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async createCMSBlock(req, res) {
    try {
      const cmsblock = new CMSBlock(req.body);
      await cmsblock.save();
      res.send(cmsblock);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async patchCMSBlock(req, res) {
    try {
      const cmsblock = await CMSBlock.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      if (!cmsblock) {
        return res.status(404).send({ message: 'CMSBlock not found' });
      } else {
        return res.send(cmsblock);
      }
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async deleteCMSBlock(req, res) {
    try {
      const cmsblock = await CMSBlock.findOneAndDelete({ _id: req.params.id });
      if (!cmsblock) {
        return res.send(404).send({ message: 'CMSBlock not found' });
      } else {
        return res.send('');
      }
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}

module.exports = CMSBlockController;
