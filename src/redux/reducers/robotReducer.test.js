import { getRandomRobot, getRandomRobots } from "../../mocks/robotFactory";
import robotsReducer from "./robotsReducer";
import { createRobotAction, getRobotsAction } from "../actions/actionCreators";

let robot;
let robots;
beforeAll(() => {
  robots = getRandomRobots();
  robot = getRandomRobot();
});

describe("Given a robotReducer,", () => {
  describe("When it receives a robots list and a get action with five robots", () => {
    test("Then it should return a new robots list with the robots received", () => {
      const initialRobots = [];

      const result = robotsReducer(initialRobots, getRobotsAction(robots));

      expect(result).toEqual(robots);
    });
  });

  describe("When it receives a robots list and a create action with one robot", () => {
    test("Then it should return a new robots list with the new robot added", () => {
      const initialRobots = [];

      const result = robotsReducer(initialRobots, createRobotAction(robot));

      expect(result).toContainEqual(robot);
    });
  });
});
