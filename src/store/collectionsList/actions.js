import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  setMessage,
  showMessageWithTimeout,
} from "../appState/actions";

export const SET_USER_COLLECTIONS = "SET_USER_COLLECTIONS";

export function setUserCollections(userCollections) {
  return {
    type: "SET_USER_COLLECTIONS",
    payload: userCollections,
  };
}

export const addNewCollection = (collectionName) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    dispatch(appLoading());

    try {
      const response = await axios.post(
        `${apiUrl}/collection/post`,
        {
          name: collectionName,
          userId: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      dispatch(setUserCollections(response.data));
      dispatch(
        showMessageWithTimeout("success", true, "Hoorray! Collection added!")
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

export const fetchUserCollections = (userId) => async (dispatch, getState) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`${apiUrl}/collection/user/${userId}`);

    dispatch(setUserCollections(response.data));
    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
  }
};
