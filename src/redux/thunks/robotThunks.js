import axios from "axios";
import { robotPaths } from "../../paths/paths";
import { createRobotAction, getRobotsAction } from "../actions/actionCreators";

export const getRobotsThunk = () => async (dispatch) => {
  const token = localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY);
  console.log(token);
  const robots = await axios.get(process.env.REACT_APP_URL + robotPaths.get, {
    headers: { Authorization: "Bearer " + token },
  });
  console.log(robots);

  dispatch(getRobotsAction(robots.data));
};

export const createRobotThunk = (robot) => async (dispatch) => {
  const { token } = JSON.stringify(
    localStorage.getItem(process.env.REACT_APP_LOCALSTORAGE_KEY)
  );
  const newRobot = await axios.post(
    process.env.REACT_APP_URL + robotPaths.post,
    robot,
    {
      headers: { Authorization: "Bearer " + token },
    }
  );

  dispatch(createRobotAction(newRobot.data));
};
