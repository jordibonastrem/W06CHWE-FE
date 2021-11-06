import App from "./App";
import renderWithProviders from "./utils/testing-utils";

test("renders learn react link", () => {
  renderWithProviders(<App />);
});
