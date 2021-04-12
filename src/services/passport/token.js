/* eslint-disable import/prefer-default-export */
/* eslint-disable import/named */
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { jwtSecret } from '../../config';
import { User } from '../../../models';

export const tokenStrategy = new JwtStrategy(
  {
    secretOrKey: jwtSecret,
    jwtFromRequest: ExtractJwt.fromExtractors([
      ExtractJwt.fromUrlQueryParameter('access_token'),
      ExtractJwt.fromBodyField('access_token'),
      ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    ]),
  },
  ({ user }, done) => {
    User.findByPk(user.id)
      .then((dbUser) => {
        done(null, dbUser);
        return null;
      })
      .catch(done);
  },
);
