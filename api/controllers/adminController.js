const passport = require('passport');
const Admin = require('../models/admin');

class AdminController {
  async login(req, res, next) {
    try {
      passport.authenticate('local', (err, user, info) => {
        if (!user) {
          return res.send(info);
        } else if (err) {
          return res.send(err);
        }

        req.login(user, (err) => {
          return res.send('');
        })
      })(req, res, next);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500).send({ message: error.message });
    }
  }
  //
  // async getSession(req, res) {
  //   try {
  //     const session = await Session.findOne({ _id: req.params.id });
  //     if (!session) {
  //       return res.send(404).send({ message: 'Session not found' });
  //     } else {
  //       return res.send(session);
  //     }
  //   } catch (error) {
  //     return res.send(500).send({ message: error.message });
  //   }
  // }
  //
  // async createSession(req, res) {
  //   try {
  //     console.log(req.body);
  //     const session = new Session(req.body);
  //     await session.save();
  //
  //     return res.send(session);
  //   } catch (error) {
  //     return res.send(500).send({ message: error.message });
  //   }
  // }
  //
  // async patchSession(req, res) {
  //   try {
  //     const session = await Session.findOneAndUpdate({ _id: req.params.id }, req.body);
  //     if (!session) {
  //       return res.send(404).send({ message: 'Session not found' });
  //     } else {
  //       return res.send(session);
  //     }
  //   } catch (error) {
  //     return res.send(500).send({ message: error.message });
  //   }
  // }
  //
  // async deleteSession(req, res) {
  //   try {
  //     const session = await Session.findOneAndDelete({ _id: req.params.id });
  //     if (!session) {
  //       return res.send(404).send({ message: 'Session not found' });
  //     } else {
  //       return res.send('');
  //     }
  //   } catch (error) {
  //     return res.send(500).send({ message: error.message });
  //   }
  // }
}

module.exports = AdminController;
