const initialState = [];

export default function collectionListReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_COLLECTIONS": {
      return action.payload;
    }

    default:
      return state;
  }
}
