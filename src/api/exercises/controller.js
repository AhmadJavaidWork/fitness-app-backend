import queries from './queries';

export const getAll = async (req, res) => {
  try {
    const exercises = await queries.getAll();
    return res.json({ exercises });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};

export const get = async (req, res) => {
  try {
    const user = req.user;
    return res.json({ user });
  } catch (error) {
    console.log('\n\nERROR ========>', error, '\n\n');
    return res.json({ error });
  }
};
