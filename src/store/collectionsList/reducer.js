const initialState = [];

export default function collectionListReducer(state = initialState, action) {
  let newState = [...state];

  switch (action.type) {
    case "SET_USER_COLLECTIONS": {
      newState = action.payload;
      break;
    }

    default: {
      // do nothing
    }
  }

  return newState;
}
