export const robotPaths = {
  get: "robots/",
  post: `robots/create?token=${process.env.REACT_APP_TOKEN}`,
  getById: "robots/:idRobot",
  put: `robots/update?token=${process.env.REACT_APP_TOKEN}`,
  delete: `robots/delete/:idRobot${process.env.REACT_APP_TOKEN}`,
};

export const usersPaths = {
  login: "users/login",
};
