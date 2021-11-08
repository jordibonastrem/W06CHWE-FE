import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../redux/actions/actionCreators";
import { userLoginThunk } from "../redux/thunks/userThunks";

function useUser() {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const userLogin = (user) => {
    dispatch(userLoginThunk(user));
  };

  const userLogout = () => {
    dispatch(userLogoutAction());
  };

  return {
    user,
    userLogin,
    userLogout,
  };
}

export default useUser;
