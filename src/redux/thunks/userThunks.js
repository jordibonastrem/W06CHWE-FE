import axios from "axios";
import jwtDecode from "jwt-decode";
import { usersPaths } from "../../paths/paths";
import { userLoginAction } from "../actions/actionCreators";

export const userLoginThunk = (user) => async (dispatch) => {
  const response = await axios.post(
    process.env.REACT_APP_URL + usersPaths.login,
    user
  );
  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(userLoginAction(user));
    localStorage.setItem(
      process.env.REACT_APP_LOCALSTORAGE_KEY,
      JSON.stringify({ token: token })
    );
  }
};
