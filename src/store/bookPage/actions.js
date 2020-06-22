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

export function setNewReview(newReview) {
  return {
    type: "SET_NEW_REVIEW",
    payload: newReview,
  };
}

export const fetchBookDetails = (collectionId, bookId) => async (
  dispatch,
  getState
) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(
      `${apiUrl}/bookscollection/book/${collectionId}/${bookId}`
    );

    dispatch(setBookDetails(response.data));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};

export const addNewReview = (newReviewData) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    dispatch(appLoading());

    try {
      const response = await axios.post(
        `${apiUrl}/review/post`,
        {
          ...newReviewData,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      dispatch(setBookDetails(...response.data));
      dispatch(
        showMessageWithTimeout("success", true, "Hoorray! Review added!")
      );
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

export const updateAmountOfLikes = (bookDetails) => {
  return async (dispatch, getState) => {
    const response = await axios.patch(`${apiUrl}/review/likes`, {
      likes: bookDetails.review.likes + 1,
      id: bookDetails.review.id,
    });

    dispatch(setBookDetails(...response.data));
  };
};
