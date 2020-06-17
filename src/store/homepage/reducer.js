const initialState = {
  reviewBoard: [],
};

export default function homepageReducer(state = initialState, action) {
  let newState = { ...state };

  switch (action.type) {
    case "SET_REVIEW_BOARD": {
      newState.reviewBoard = action.payload;
      break;
    }

    default: {
      // do nothing
    }
  }

  return newState;
}
