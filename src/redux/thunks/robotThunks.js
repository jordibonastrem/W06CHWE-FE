import axios from "axios";
import { getRobotsAction } from "../actions/actionCreators";

export const getRobotsThunks = () => async (dispatch) => {
  const res = await axios;
  const robots = await res.json();

  dispatch(getRobotsAction(robots));
};
