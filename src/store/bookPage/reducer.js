const initialState = {};

export default function bookPageReducer(state = initialState, action) {
  let newState = { ...state };

  switch (action.type) {
    case "SET_BOOK_DETAILS": {
      newState = action.payload;
      break;
    }

    default: {
      // do nothing
    }
  }

  return newState;
}
