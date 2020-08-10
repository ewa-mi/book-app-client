const initialState = {
  collection: [],
  onlyCollection: [],
  bookData: [],
};

export default function collectionReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_COLLECTION": {
      return { ...state, collection: action.payload };
    }

    case "SET_BOOK_DATA": {
      return { ...state, bookData: action.payload };
    }

    case "SET_ONLY_COLLECTION": {
      return { ...state, onlyCollection: action.payload };
    }

    default:
      return state;
  }
}
