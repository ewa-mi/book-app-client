import { combineReducers } from "redux";
import appState from "./appState/reducer";
import homepageReducer from "./homepage/reducer";

export default combineReducers({
  appState,
  homepage: homepageReducer,
});
