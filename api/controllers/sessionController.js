const Session = require('../models/session');

class SessionController {
  async getSessions(req, res) {
    try {
      const sessions = await Session.find({});
      return res.send(sessions);
    } catch (error) {
      return res.sendStatus(500).send({ message: error.message });
    }
  }

  async getSession(req, res) {
    try {
      const session = await Session.findOne({ _id: req.params.id });
      if (!session) {
        return res.sendStatus(404).send({ message: 'Session not found' });
      } else {
        return res.send(session);
      }
    } catch (error) {
      return res.sendStatus(500).send({ message: error.message });
    }
  }

  async createSession(req, res) {
    try {
      console.log('here')
      const session = new Session(req.body);
      console.log(session);
      await session.save();
      console.log(session);
      res.send(session);
    } catch (error) {
      console.log(error);
      res.sendStatus(500).send({ message: error.message });
    }
  }

  async patchSession(req, res) {
    try {
      const session = await Session.findOneAndUpdate({ _id: req.params.id }, req.body);
      if (!session) {
        return res.sendStatus(404).send({ message: 'Session not found' });
      } else {
        return res.send(session);
      }
    } catch (error) {
      return res.sendStatus(500).send({ message: error.message });
    }
  }

  async deleteSession(req, res) {
    try {
      const session = await Session.findOneAndDelete({ _id: req.params.id });
      if (!session) {
        return res.send(404).send({ message: 'Session not found' });
      } else {
        return res.send('');
      }
    } catch (error) {
      return res.sendStatus(500).send({ message: error.message });
    }
  }
}

module.exports = SessionController;
