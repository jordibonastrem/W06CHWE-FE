import axios from "axios";
import paths from "../../paths/paths";
import { createRobotAction, getRobotsAction } from "../actions/actionCreators";

export const getRobotsThunks = () => async (dispatch) => {
  const res = await axios.get(process.env.REACT_APP_URL + paths.get);
  const robots = await res.json();

  dispatch(getRobotsAction(robots));
};

export const createRobotThunk = () => async (dispatch) => {
  const res = await axios.post(process.env.REACT_APP_URL + paths.post);
  const robot = await res.json();

  dispatch(createRobotAction(robot));
};
