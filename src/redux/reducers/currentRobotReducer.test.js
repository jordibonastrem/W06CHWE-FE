import { getRandomRobot } from "../../mocks/robotFactory";
import { getCurrentRobotAction } from "../actions/actionCreators";
import currentRobotReducer from "./currentRobotReducer";

let robot;
beforeAll(() => {
  robot = getRandomRobot();
});

describe("Given a currentRobotReducer,", () => {
  describe("When it receives a robot and a get action with a robots", () => {
    test("Then it should return the new robot it received", () => {
      const initialRobot = {
        name: "",
        imageSource: "",
        features: {
          creationDate: "",
          speed: "",
          endurance: "",
          isItCute: "",
        },
      };

      const result = currentRobotReducer(
        initialRobot,
        getCurrentRobotAction(robot)
      );

      expect(result).toEqual(robot);
    });
  });
});
