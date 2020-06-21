const initialState = {
  collection: [],
  onlyCollection: [],
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

    case "SET_ONLY_COLLECTION": {
      newState.onlyCollection = action.payload;
      break;
    }

    default: {
      // do nothing
    }
  }

  return newState;
}
