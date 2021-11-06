import axios from "axios";
import paths from "../../paths/paths";
import { getRobotsAction } from "../actions/actionCreators";

export const getRobotsThunks = () => async (dispatch) => {
  const res = await axios.get(process.env.REACT_APP_URL + paths.get);
  const robots = await res.json();

  dispatch(getRobotsAction(robots));
};
