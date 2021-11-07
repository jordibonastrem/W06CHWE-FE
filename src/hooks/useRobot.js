import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRobotsThunk } from "../redux/thunks/robotThunks";

const useRobot = () => {
  const robots = useSelector(({ robots }) => robots);
  const [formState, setFormState] = useState("Button");
  const dispatch = useDispatch();

  const getRobots = useCallback(() => {
    dispatch(getRobotsThunk());
  }, [dispatch]);

  const createRobot = useCallback(() => {
    dispatch(createRobot());
  }, [dispatch]);

  return {
    robots,
    formState,
    getRobots,
    createRobot,
    setFormState,
  };
};

export default useRobot;
