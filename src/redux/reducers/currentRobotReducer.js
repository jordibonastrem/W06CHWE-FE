import actionTypes from "../actions/actionTypes";

const currentRobotReducer = (
  currentRobot = {
    name: "",
    imageSource: "",
    features: {
      creationDate: "",
      speed: "",
      endurance: "",
      isItCute: "",
    },
  },
  action
) => {
  let newCurrentRobot;
  switch (action.type) {
    case actionTypes.getCurrentRobot:
      newCurrentRobot = { ...action.robot };
      break;
    default:
      newCurrentRobot = currentRobot;
  }
  return newCurrentRobot;
};

export default currentRobotReducer;
