import axios from "axios";
import { apiUrl } from "../../config/constants";

export function setReviewBoard(reviewBoard) {
  return {
    type: "SET_REVIEW_BOARD",
    payload: reviewBoard,
  };
}

export const fetchFullData = () => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/bookscollection`);

    dispatch(setReviewBoard(response.data.bookscollections));
    console.log("response", response.data.bookscollections);
  } catch (error) {
    console.log(error);
  }
};
