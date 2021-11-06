import actionTypes from "./actionTypes";

export const getRobotsAction = (robots) => ({
  type: actionTypes.getRobots,
  robots,
});
export const createRobotAction = (robot) => ({
  type: actionTypes.createRobot,
  robot,
});
