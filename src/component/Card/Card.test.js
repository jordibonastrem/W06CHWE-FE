import { getRandomRobot } from "../../mocks/robotFactory";
import Card from "./Card";
import { screen, render } from "@testing-library/react";
import ReactTestRenderer from "react-test-renderer";

describe("Given a Card component,", () => {
  let robot;
  beforeEach(() => {
    robot = getRandomRobot();
  });

  describe("When it receives an empty object", () => {
    test("Then it renders!", () => {
      robot = {
        id: "",
        name: "",
        imageSource: "",
        features: {
          speed: NaN,
          endurance: NaN,
          creationDate: "",
          isItCute: false,
        },
      };
      render(<Card robot={robot} />);
    });
  });

  describe("When it recieves a robot object", () => {
    test("Then it renders!", () => {
      render(<Card robot={robot} />);
    });

    test("Then it renders correctly its data", () => {
      render(<Card robot={robot} />);

      const name = screen.getByRole("heading", { name: robot.name });
      const imageSource = screen.getByAltText("Robot");
      const date = screen.getByRole("heading", {
        name: `created on ${robot.features.creationDate}`,
      });
      const paragraph = screen.getByText(
        `This robot has a speed of ${robot.features.speed}, endurance of ${
          robot.features.endurance
        } and it's ${robot.features.isItCute ? "very cute" : "kind of ugly"}.`
      );

      expect(name).toBeInTheDocument();
      expect(imageSource.src).toBe(robot.imageSource);
      expect(paragraph).toBeInTheDocument();
      expect(date).toBeInTheDocument();
    });

    test("Snapshot of the test", () => {
      robot = {
        id: "123",
        name: "Juanito",
        imageSource: "http://localhost:666/",
        features: {
          speed: 3,
          endurance: 5,
          creationDate: "1994",
          isItCute: false,
        },
      };
      const renderedComponent = ReactTestRenderer.create(
        <Card robot={robot} />
      );

      expect(renderedComponent.toJSON()).toMatchSnapshot();
    });
  });
});
