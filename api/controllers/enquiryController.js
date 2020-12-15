const Enquiry = require('../models/enquiry');

class EnquiryController {
  async getEnquirys(req, res) {
    try {
      const enquiries = await Enquiry.find({});
      return res.send(enquiries);
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async getEnquiry(req, res) {
    try {
      const enquiry = await Enquiry.findOne({ _id: req.params.id });
      if (!enquiry) {
        return res.status(404).send({ message: 'Enquiry not found' });
      } else {
        return res.send(enquiry);
      }
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async createEnquiry(req, res) {
    try {
      const enquiry = new Enquiry(req.body);
      await enquiry.save();
      res.send(enquiry);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async patchEnquiry(req, res) {
    try {
      const enquiry = await Enquiry.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
      if (!enquiry) {
        return res.status(404).send({ message: 'Enquiry not found' });
      } else {
        return res.send(enquiry);
      }
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }

  async deleteEnquiry(req, res) {
    try {
      const enquiry = await Enquiry.findOneAndDelete({ _id: req.params.id });
      if (!enquiry) {
        return res.send(404).send({ message: 'Enquiry not found' });
      } else {
        return res.send('');
      }
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  }
}

module.exports = EnquiryController;
