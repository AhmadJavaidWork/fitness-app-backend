export const userView = (user) => {
  user = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
  return user;
};

export const userTokenView = (user) => {
  user = {
    id: user.id,
    email: user.email,
    role: user.role,
  };
  return user;
};

export const exerciseView = (exercise) => {
  exercise = {
    id: exercise.id,
    name: exercise.name,
    sets: exercise.sets,
    counts: exercise.counts,
  };
  return exercise;
};
