import { BasicStrategy } from 'passport-http';
import bcrypt from 'bcrypt';
import { User } from '../../../models';

export const passwordStrategy = new BasicStrategy(
  async (email, password, done) => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      done(true);
      return null;
    }
    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) return done(null, user);
    return done(null, false);
  }
);
