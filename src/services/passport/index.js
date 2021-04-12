/* eslint-disable no-bitwise */
/* eslint-disable consistent-return */
/* eslint-disable implicit-arrow-linebreak */
import passport from 'passport';
import { User } from '../../../models';
import { passwordStrategy } from './password';
import { masterStrategy } from './master';
import { tokenStrategy } from './token';

const users = {};
users.roles = ['admin', 'user'];

export const password = () => (req, res, next) =>
  passport.authenticate('password', { session: false }, (err, user) => {
    if (err && err.param) {
      return res.json({ status: 200, err });
    } if (err || !user) {
      return res.json({
        status: 200,
        error: 'Wrong Password or Email Address',
      });
    }
    req.logIn(user, { session: false }, (error) => {
      if (error) return res.json({ status: 200, error });
      next();
    });
  })(req, res, next);

export const master = () => passport.authenticate('master', { session: false });

export const token = ({ required, roles = users.roles } = {}) => (
  req,
  res,
  next,
) =>
  passport.authenticate('token', { session: false }, (err, user) => {
    if (
      err
      || (required && !user)
      || (required && !~roles.indexOf(user.role))
    ) {
      return res.json({ authorized: false });
    }
    req.logIn(user, { session: false }, (error) => {
      if (error) return res.json({ authorized: false });
      next();
    });
  })(req, res, next);

passport.use('password', passwordStrategy);
passport.use('master', masterStrategy);
passport.use('token', tokenStrategy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findAll({ where: { id } });
  done(null, user);
});
