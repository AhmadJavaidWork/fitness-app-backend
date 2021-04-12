import { genSalt, hash } from 'bcrypt';

const genHash = async (password) => {
  const salt = await genSalt(10);
  const passwordHash = await hash(password, salt);
  return passwordHash;
};

export default {
  genHash,
};
