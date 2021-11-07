import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRobotsThunk } from "../redux/thunks/robotThunks";
import { getCurrentRobotAction } from "../redux/actions/actionCreators";

const useRobot = () => {
  const robots = useSelector(({ robots }) => robots);
  const currentRobot = useSelector(({ robot }) => robot);
  const [formState, setFormState] = useState("Button");
  const dispatch = useDispatch();

  const getRobots = useCallback(() => {
    dispatch(getRobotsThunk());
  }, [dispatch]);

  const createRobot = useCallback(() => {
    dispatch(createRobot());
  }, [dispatch]);

  const getCurrentRobot = (robot) => {
    dispatch(getCurrentRobotAction(robot));
  };

  return {
    robots,
    formState,
    currentRobot,
    getRobots,
    createRobot,
    setFormState,
    getCurrentRobot,
  };
};

export default useRobot;
