import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRobotsThunk } from "../redux/thunks/robotThunks";

const useRobot = () => {
  const robots = useSelector(({ robots }) => robots);
  const dispatch = useDispatch();

  const getRobots = useCallback(() => {
    dispatch(getRobotsThunk());
  }, [dispatch]);

  const createRobot = useCallback(() => {
    dispatch(createRobot());
  }, [dispatch]);

  return {
    robots,
    getRobots,
    createRobot,
  };
};

export default useRobot;
