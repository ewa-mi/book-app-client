import { combineReducers } from "redux";
import homepageReducer from "./homepage/reducer";

export default combineReducers({
  homepage: homepageReducer,
});
