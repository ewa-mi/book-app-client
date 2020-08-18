import reducer from "../reducer";
import { SET_BOOK_DETAILS } from "../actions";

describe("bookPageReducer", () => {
  const initialState = {};

  describe("if given state === undefined and an action with unknown action type", () => {
    test("returns the inital state", () => {
      const newState = reducer(undefined, { type: "ANY" });
      expect(newState).toEqual(initialState);
    });
  });

  describe("when given a SET_BOOK_DETAILS action type", () => {
    test("returns the new state", () => {
      const bookDetails = {};
      const action = { type: SET_BOOK_DETAILS, payload: bookDetails };
      const newState = reducer(initialState, action);
      expect(Object.keys(newState)).toHaveLength(
        Object.keys(bookDetails).length
      );
      expect(newState).toEqual(bookDetails);
    });
  });
});
