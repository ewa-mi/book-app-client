import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appLoading, appDoneLoading } from "../appState/actions";

export function setBooksCollections(booksCollections) {
  return {
    type: "SET_BOOKS_COLLECTIONS",
    payload: booksCollections,
  };
}

export const fetchFullData = () => async (dispatch, getState) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/bookscollection`);

    dispatch(setBooksCollections(response.data.bookscollections));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};
