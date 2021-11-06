import { getRandomRobot, getRandomRobots } from "../../mocks/robotFactory";
import { createRobotAction, getRobotsAction } from "./actionCreators";
import actionTypes from "./actionTypes";

let robot;
let robots;

beforeAll(() => {
  robot = getRandomRobot;
  robots = getRandomRobots;
});

describe("Given a getRobotsAction", () => {
  describe("When it receives a list of robots", () => {
    test("Then it should return a getRobots action with the robots received", () => {
      const expected = {
        type: actionTypes.getRobots,
        robots,
      };

      const result = getRobotsAction(robots);

      expect(result).toEqual(expected);
    });
  });
});

describe("Given a createRobotAction", () => {
  describe("When it receives a robot", () => {
    test("Then it should return a createRobot action with the robot received", () => {
      const expected = {
        type: actionTypes.createRobot,
        robot,
      };

      const result = createRobotAction(robot);

      expect(result).toEqual(expected);
    });
  });
});
