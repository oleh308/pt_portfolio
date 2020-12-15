const CMSBlock = require('../models/cmsblock');
const Configuration = require('../models/configuration');

class ConfigurationController {
  async getConfigurations(req, res) {
    try {
      const configurations = await Configuration.find({});
      return res.send(configurations);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async getConfiguration(req, res) {
    try {
      const configuration = await Configuration.findOne({ _id: req.params.id });
      if (!configuration) {
        return res.status(404).send({ message: 'Configuration not found' });
      } else {
        return res.send(configuration);
      }
    } catch (error) {
      return res.sendStatus(500).send({ message: error.message });
    }
  }

  async createConfiguration(req, res) {
    try {
      const configuration = new Configuration(req.body);
      await configuration.save();
      res.send(configuration);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async patchConfiguration(req, res) {
    try {
      const configuration = await Configuration.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      if (!configuration) {
        return res.status(404).send({ message: 'Configuration not found' });
      } else {
        return res.send(configuration);
      }
    } catch (error) {
      return res.sendStatus(500).send({ message: error.message });
    }
  }

  async deleteConfiguration(req, res) {
    try {
      const configuration = await Configuration.findOneAndDelete({ _id: req.params.id });
      if (!configuration) {
        return res.status(404).send({ message: 'Configuration not found' });
      } else {
        return res.send('');
      }
    } catch (error) {
      return res.sendStatus(500).send({ message: error.message });
    }
  }

  async getPage(req, res) {
    try {
      const configuration = await Configuration.findOne({ title: req.params.page, lang: req.params.lang });
      if (!configuration) {
        return res.status(404).send({ message: 'Configuration not found' });
      } else {
        const cmsblocks = await CMSBlock.find({});
        const inputKeys = Object.keys(configuration.settings);
        inputKeys.forEach(key => {
          if (configuration.settings[key].type === 'block' &&
              configuration.settings[key].blockId) {
            configuration.settings[key].block = cmsblocks.find(block => block._id.toString() === configuration.settings[key].blockId);
          }
        });

        return res.send(configuration);
      }
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}

module.exports = ConfigurationController;
