import { Provider } from "react-redux";
import { render } from "../../../../w06ch1/node_modules/@testing-library/react/types";
import configureStore from "../redux/store";

const renderWithProviders = (component, initialState) => {
  const store = configureStore(initialState);
  const AllTheProviders = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return render(component, { wrapper: AllTheProviders });
};

export default renderWithProviders;
