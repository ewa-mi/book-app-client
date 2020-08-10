const initialState = {};

export default function bookPageReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_BOOK_DETAILS": {
      return action.payload;
    }

    default:
      return state;
  }
}
