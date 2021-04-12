export const userView = (userInfo) => {
  const user = {
    id: userInfo.id,
    name: userInfo.name,
    email: userInfo.email,
    role: userInfo.role,
  };
  return user;
};

export const userTokenView = (userInfo) => {
  const user = {
    id: userInfo.id,
    email: userInfo.email,
    role: userInfo.role,
  };
  return user;
};

export const exerciseView = (exerciseInfo) => {
  const exercise = {
    id: exerciseInfo.id,
    name: exerciseInfo.name,
    sets: exerciseInfo.sets,
    counts: exerciseInfo.counts,
  };
  return exercise;
};
