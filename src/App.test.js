import App from "./App";
import renderWithProviders from "./utils/testing-utils";
import { server } from "./mocks/server";

describe("Given an App component,", () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
    jest.resetAllMocks();
  });

  describe("When it renders", () => {
    test("Then it renders", () => {
      renderWithProviders(<App />);
    });
  });
});
