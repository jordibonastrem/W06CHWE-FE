import actionTypes from "./actionTypes";

export const getRobotsAction = (robots) => ({
  type: actionTypes.getRobots,
  robots,
});
export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});
export const getCurrentRobotAction = (robot) => ({
  type: actionTypes.getCurrentRobot,
  robot,
});

export const userLoginAction = (user) => ({
  type: actionTypes.userLogin,
  user,
});

export const userLogoutAction = () => ({
  type: actionTypes.userLogout,
});
