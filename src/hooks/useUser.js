import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../redux/actions/actionCreators";

function useUser() {
  const user = useSelector(({ user }) => user);
  const dispatch = useDispatch();

  const userLogin = (user) => {
    dispatch(userLoginAction(user));
  };

  return {
    user,
    userLogin,
  };
}

export default useUser;
