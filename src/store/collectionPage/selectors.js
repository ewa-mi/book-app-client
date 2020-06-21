export const selectCollection = (state) => {
  return state.collection.collection;
};

export const selectBookData = (state) => {
  return state.collection.bookData;
};

export const selectOnlyCollection = (state) => {
  return state.collection.onlyCollection;
};
