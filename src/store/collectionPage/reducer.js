const initialState = {
  collection: [],
};

export default function collectionReducer(state = initialState, action) {
  let newState = { ...state };

  switch (action.type) {
    case "SET_COLLECTION": {
      newState.collection = action.payload;
      break;
    }

    case "SET_BOOK_DATA": {
      newState.bookData = action.payload;
      break;
    }

    default: {
      // do nothing
    }
  }

  return newState;
}
