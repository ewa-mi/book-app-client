import { SET_BOOKS_COLLECTIONS, setBooksCollections } from "../actions";

describe("#setBooksCollections", () => {
  describe("if given an array of booksCollections", () => {
    test("should return an action object", () => {
      // test data simulating booksCollections
      const booksCollections = [];
      // build action we expect to get back
      const expected = {
        type: SET_BOOKS_COLLECTIONS,
        payload: booksCollections,
      };
      // call function
      const action = setBooksCollections(booksCollections);
      // do assertion on function return
      expect(action).toEqual(expected);
    });

    test("action.payload should have the same length as the argument given", () => {
      // test data simulating collection
      const booksCollections = [];
      // build action we expect to get back
      const expected = {
        type: SET_BOOKS_COLLECTIONS,
        payload: booksCollections,
      };

      // call function
      const action = setBooksCollections(booksCollections);
      // do assertion on function return
      expect(action.payload).toHaveLength(expected.payload.length);
    });
  });

  describe("if given a null argument", () => {
    test("action.payload should be null", () => {
      // test data simulating booksCollections
      const booksCollections = null;
      // build action we expect to get back

      const expected = {
        type: SET_BOOKS_COLLECTIONS,
        payload: booksCollections,
      };
      // call function

      const action = setBooksCollections(booksCollections);
      // do assertion on function return
      expect(action.payload).toEqual(expected.payload);
    });
  });
});
