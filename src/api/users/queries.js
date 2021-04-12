import { User } from '../../../models';

const register = async (user) => {
  const userInfo = await User.create(user);
  return userInfo;
};

const update = async (id, user) => {
  await User.update(user, { where: { id } });
};

const changePassword = async (id, password) => {
  await User.update({ password }, { where: { id } });
};

export default {
  register,
  update,
  changePassword,
};
