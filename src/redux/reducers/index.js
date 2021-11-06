import { combineReducers } from "redux";
import robotsReducer from "./robotsReducer";

const mommyReducer = combineReducers({
  robots: robotsReducer,
});

export default mommyReducer;
