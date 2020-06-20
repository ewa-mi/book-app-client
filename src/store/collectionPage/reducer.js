const initialState = [];

export default function collectionReducer(state = initialState, action) {
  let newState = [...state];

  switch (action.type) {
    case "SET_COLLECTION": {
      newState = action.payload;
      break;
    }

    default: {
      // do nothing
    }
  }

  return newState;
}
