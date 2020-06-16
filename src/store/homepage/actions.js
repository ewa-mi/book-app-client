export function displayReviews(reviews) {
  return {
    type: "DISPLAY_REVIEWS",
    payload: reviews,
  };
}

export const fetchReviews = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("http://api-url");
    dispatch(displayProducts(response.data));
  } catch (error) {
    console.log(error);
  }
};
