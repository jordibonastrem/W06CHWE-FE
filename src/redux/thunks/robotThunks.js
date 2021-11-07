import axios from "axios";
import paths from "../../paths/paths";
import { createRobotAction, getRobotsAction } from "../actions/actionCreators";

export const getRobotsThunk = () => async (dispatch) => {
  const robots = await axios.get(process.env.REACT_APP_URL + paths.get);

  dispatch(getRobotsAction(robots.data));
};

export const createRobotThunk = (robot) => async (dispatch) => {
  const newRobot = await axios.post(
    process.env.REACT_APP_URL + paths.post,
    robot
  );
  /*   const response = await fetch(process.env.REACT_APP_URL + paths.post, {
    method: "POST",
    body: JSON.stringify(robot),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const newRobot = await response.json(); */

  dispatch(createRobotAction(newRobot));
};
