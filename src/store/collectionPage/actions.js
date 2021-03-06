import axios from "axios";
import { apiUrl, GOOGLE_BOOKS_API_KEY } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  setMessage,
  showMessageWithTimeout,
} from "../appState/actions";

export const SET_COLLECTION = "SET_COLLECTION";

export function setCollection(collection) {
  return {
    type: "SET_COLLECTION",
    payload: collection,
  };
}

export function setOnlyCollection(onlyCollection) {
  return {
    type: "SET_ONLY_COLLECTION",
    payload: onlyCollection,
  };
}

export function setBookData(bookData) {
  return {
    type: "SET_BOOK_DATA",
    payload: bookData,
  };
}

export const addNewBook = (providedData) => {
  return async (dispatch, getState) => {
    const { user, collection } = getState();
    dispatch(appLoading());

    try {
      const response = await axios.post(
        `${apiUrl}/bookscollection/post`,
        {
          ...providedData,
          userId: user.id,
          collectionId: collection.onlyCollection.id,
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

export const fetchOnlyCollection = (id) => async (dispatch, getState) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/collection/${id}`);

    dispatch(setOnlyCollection(response.data));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};

export const fetchBookData = (isbn) => async (dispatch, getState) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${GOOGLE_BOOKS_API_KEY}`
    );

    dispatch(setBookData(response.data));
    dispatch(appDoneLoading());
    !response.data.totalItems &&
      dispatch(
        showMessageWithTimeout(
          "primary",
          true,
          "Sorry, we didn't find that book. Provide correct ISBN or fill the inputs on you own."
        )
      );
  } catch (error) {
    console.log(error);
  }
};
