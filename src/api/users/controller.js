import queries from './queries';
import bcrypt from '../../services/bcrypt';
import { sign } from '../../services/jwt';
import { userTokenView, userView } from '../../utils/dataViews';

export const showMe = async ({ user }, res) => {
  try {
    return res.json({ user: userView(user) });
  } catch (error) {
    res.json({ error });
    throw new Error('\n\nERROR ========>', error, '\n\n');
  }
};

export const register = async (req, res) => {
  try {
    const user = req.body;
    user.password = await bcrypt.genHash(user.password);
    const userInfo = await queries.register(user);
    const accessToken = await sign(userTokenView(userInfo));
    return res.json({ accessToken, user: userView(userInfo) });
  } catch (error) {
    res.json({ error });
    throw new Error('\n\nERROR ========>', error, '\n\n');
  }
};

export const update = async ({ body, params, user }, res) => {
  try {
    if (!user.id === params.id) {
      return res.json({ error: "You can't change other user's data" });
    }
    const { id } = user;
    const updatedUser = body;
    if (updatedUser.password) {
      delete updatedUser.password;
    }
    await queries.update(id, updatedUser);
    return res.json({ status: 200 });
  } catch (error) {
    res.json({ error });
    throw new Error('\n\nERROR ========>', error, '\n\n');
  }
};

export const changePassword = async ({ user, body }, res) => {
  try {
    if (!body.password) {
      return res.json({ error: 'Please provide the updated password' });
    }
    const password = await bcrypt.genHash(body.password);
    await queries.changePassword(user.id, password);
    return res.json({ status: 200 });
  } catch (error) {
    res.json({ error });
    throw new Error('\n\nERROR ========>', error, '\n\n');
  }
};
