import axios from "axios";
import { apiUrl } from "../../config/constants";
import {
  appLoading,
  appDoneLoading,
  setMessage,
  showMessageWithTimeout,
} from "../appState/actions";

export const addNewCollection = (collectionName) => {
  return async (dispatch, getState) => {
    const { user } = getState();
    dispatch(appLoading());
    try {
      const response = await axios.post(
        `${apiUrl}/collections/post`,
        {
          ...collectionName,
          userId: user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      dispatch(addNewCollection(response.data));
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
