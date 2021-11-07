import { getRandomRobot } from "../mocks/robotFactory";
import renderWithProviders from "../utils/testing-utils";
import Card from "./Card";

describe("Given a Card component,", () => {
  let robot;
  beforeAll(() => {
    robot = getRandomRobot();
  });
  describe("When it renders", () => {
    test("Then it renders!", () => {
      renderWithProviders(<Card robot={robot} />);
    });
  });
});
