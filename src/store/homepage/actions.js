import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appLoading, appDoneLoading } from "../appState/actions";

export function setReviewBoard(reviewBoard) {
  return {
    type: "SET_REVIEW_BOARD",
    payload: reviewBoard,
  };
}

export const fetchFullData = () => async (dispatch, getState) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/bookscollection`);

    dispatch(setReviewBoard(response.data.bookscollections));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};
