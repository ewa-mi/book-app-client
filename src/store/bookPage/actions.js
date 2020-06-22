import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  setMessage,
  showMessageWithTimeout,
} from "../appState/actions";

export function setBookDetails(bookDetails) {
  return {
    type: "SET_BOOK_DETAILS",
    payload: bookDetails,
  };
}

export const fetchBookDetails = (bookId) => async (dispatch, getState) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(
      `${apiUrl}/bookscollection/book/${bookId}`
    );

    dispatch(setBookDetails(response.data));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};
