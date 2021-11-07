import axios from "axios";
import paths from "../../paths/paths";
import { createRobotAction, getRobotsAction } from "../actions/actionCreators";

export const getRobotsThunk = () => async (dispatch) => {
  const robots = await axios.get(process.env.REACT_APP_URL + paths.get);

  dispatch(getRobotsAction(robots.data));
};

export const createRobotThunk = () => async (dispatch) => {
  const robot = await axios.post(process.env.REACT_APP_URL + paths.post);

  dispatch(createRobotAction(robot));
};
