import { sign } from '../../services/jwt';
import { userTokenView, userView } from '../../utils/dataViews';

export const signIn = async ({ user }, res) => {
  try {
    const accessToken = await sign(userTokenView(user));
    return res.json({ accessToken, user: userView(user) });
  } catch (error) {
    res.json({ error });
    throw new Error('\n\nERROR ========>', error, '\n\n');
  }
};

export const signOut = async ({ user }, res) => {
  try {
    return res.json({ user });
  } catch (error) {
    res.json({ error });
    throw new Error('\n\nERROR ========>', error, '\n\n');
  }
};
