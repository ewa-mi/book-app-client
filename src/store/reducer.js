import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import homepageReducer from "./homepage/reducer";

export default combineReducers({
  appState,
  user,
  homepage: homepageReducer,
});
