const paths = {
  get: "/",
  post: `/create?token=${process.env.REACT_APP_TOKEN}`,
  getById: "/:idRobot",
  put: `/update?token=${process.env.REACT_APP_TOKEN}`,
  delete: `/delete/:idRobot${process.env.REACT_APP_TOKEN}`,
};

export default paths;
