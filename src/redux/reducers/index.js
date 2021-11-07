import { combineReducers } from "redux";
import currentRobotReducer from "./currentRobotReducer";
import robotsReducer from "./robotsReducer";

const mommyReducer = combineReducers({
  robots: robotsReducer,
  currentRobot: currentRobotReducer,
});

export default mommyReducer;
