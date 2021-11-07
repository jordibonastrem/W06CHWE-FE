import { getRandomRobot } from "../mocks/robotFactory";
import { server } from "../mocks/server";
import renderWithProviders from "../utils/testing-utils";
import Card from "./Card";

describe("Given a Card component,", () => {
  let robot;
  beforeAll(() => {
    robot = getRandomRobot();
    server.listen();
  });

  afterAll(() => {
    server.close();
    jest.resetAllMocks();
  });

  describe("When it renders", () => {
    test("Then it renders!", () => {
      renderWithProviders(<Card robot={robot} />);
    });
  });
});
