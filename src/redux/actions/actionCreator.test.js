import { getRandomRobot, getRandomRobots } from "../../mocks/robotFactory";
import { getRobotsAction } from "./actionCreators";
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
