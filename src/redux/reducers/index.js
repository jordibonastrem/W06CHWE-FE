import { combineReducers } from "redux";
import currentRobotReducer from "./currentRobotReducer";
import robotsReducer from "./robotsReducer";
import userReducer from "./userReducer";

const mommyReducer = combineReducers({
  robots: robotsReducer,
  currentRobot: currentRobotReducer,
  user: userReducer,
});

export default mommyReducer;
