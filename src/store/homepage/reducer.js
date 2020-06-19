const initialState = {
  booksCollections: [],
};

export default function homepageReducer(state = initialState, action) {
  let newState = { ...state };

  switch (action.type) {
    case "SET_BOOKS_COLLECTIONS": {
      newState.booksCollections = action.payload;
      break;
    }

    default: {
      // do nothing
    }
  }

  return newState;
}
