const paths = {
  get: "/",
  post: `/create?token=${process.env.TOKEN}`,
  getById: "/:idRobot",
  put: `/update?token=${process.env.TOKEN}`,
  delete: `/delete/:idRobot${process.env.TOKEN}`,
};

export default paths;
