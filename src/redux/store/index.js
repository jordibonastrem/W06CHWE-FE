import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import mommyReducer from "../reducers/index";

const configureStore = (initialValues) => {
  return createStore(
    mommyReducer,
    initialValues,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export default configureStore;
