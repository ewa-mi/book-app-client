const initialState = {
  booksCollections: [],
};

export default function homepageReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_BOOKS_COLLECTIONS": {
      return { ...state, booksCollections: action.payload };
    }

    default:
      return state;
  }
}
