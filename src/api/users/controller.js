import queries from './queries';
import { genHash } from '../../services/bcrypt';
import { sign } from '../../services/jwt';
import { userTokenView, userView } from '../../utils/dataViews';

export const showMe = async (req, res) => {
  try {
    const user = req.user;
    return res.json({ user: userView(user) });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};

export const register = async (req, res) => {
  try {
    const user = req.body;
    user.password = await genHash(user.password);
    const userInfo = await queries.register(user);
    const accessToken = await sign(userTokenView(userInfo));
    return res.json({ accessToken, user: userView(userInfo) });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};

export const update = async ({ body, params, user }, res) => {
  try {
    if (!user.id === params.id) {
      return res.json({ error: "You can't change other user's data" });
    }
    const id = user.id;
    const updatedUser = body;
    if (updatedUser.password) {
      delete updatedUser.password;
    }
    await queries.update(id, updatedUser);
    return res.json({ status: 200 });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};

export const changePassword = async ({ user, body }, res) => {
  try {
    if (!body.password) {
      return res.json({ error: 'Please provide the updated password' });
    }
    const password = await genHash(body.password);
    await queries.changePassword(user.id, password);
    return res.json({ status: 200 });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};
