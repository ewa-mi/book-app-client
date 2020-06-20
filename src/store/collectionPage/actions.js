import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  setMessage,
  showMessageWithTimeout,
} from "../appState/actions";

export function setCollection(collection) {
  return {
    type: "SET_COLLECTION",
    payload: collection,
  };
}

export const addNewBook = (providedData) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    dispatch(appLoading());

    try {
      const response = await axios.post(
        `${apiUrl}/????????/post`,
        {
          ...providedData,
          userId: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      dispatch(setCollection(response.data));
      dispatch(showMessageWithTimeout("success", true, "Hoorray! Book added!"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const fetchCollection = (collectionId) => async (dispatch, getState) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(
      `${apiUrl}/bookscollection/collection/${collectionId}`
    );

    dispatch(setCollection(response.data));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};

export const fetchBookData = (isbn) => async (dispatch, getState) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=AIzaSyAVXF89BDZJXy4wq2h4aG3wbehHCh-4Aa0`
    );

    dispatch(response.data);
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};
