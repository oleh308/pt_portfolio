const passport = require('passport');
const Admin = require('../models/admin');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  { usernameField: 'username' },
  (username, password, done) => {
    console.log('LocalStrategy')
    Admin.findOne({ username: username, password: password }).then(user => {
      console.log('Admin callback')
      if (!user) {
        console.log('no user')
        return done(null, false, { message: 'Invalid credentials.\n' });
      }

      return done(null, user);
    }).catch(error => {
      done(error);
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  Admin.findOne({ _id: id }).then(user => {
    done(null, user);
  }).catch(error => {
    done(error, false);
  })
});
