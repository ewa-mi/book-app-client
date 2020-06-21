import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import homepageReducer from "./homepage/reducer";
import collectionListReducer from "./collectionsList/reducer";
import collectionReducer from "./collectionPage/reducer";

export default combineReducers({
  appState,
  user,
  homepage: homepageReducer,
  collectionsList: collectionListReducer,
  collection: collectionReducer,
});
