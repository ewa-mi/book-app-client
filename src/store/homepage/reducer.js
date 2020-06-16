const initialState = {
  reviews: [],
};

export default function homepageReducer(state = initialState, action) {
  let newState = { ...state };

  switch (action.type) {
    case "SET_REVIEWS": {
      newState.artworks = action.payload;
      break;
    }

    default: {
      // do nothing
    }
  }

  return newState;
}
