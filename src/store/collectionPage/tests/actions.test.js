import { SET_COLLECTION, setCollection } from "../actions";

describe("#setCollection", () => {
  describe("if given an array of collections", () => {
    test("should return an action object", () => {
      // test data simulating collection
      const collection = [];
      // build action we expect to get back
      const expected = {
        type: SET_COLLECTION,
        payload: collection,
      };
      // call function
      const action = setCollection(collection);
      // do assertion on function return
      expect(action).toEqual(expected);
    });

    test("action.payload should have the same length as the argument given", () => {
      // test data simulating collection
      const collection = [];
      // build action we expect to get back
      const expected = {
        type: SET_COLLECTION,
        payload: collection,
      };

      // call function
      const action = setCollection(collection);
      // do assertion on function return
      expect(action.payload).toHaveLength(expected.payload.length);
    });
  });

  describe("if given a null argument", () => {
    test("action.payload should be null", () => {
      // test data simulating collection
      const collection = null;
      // build action we expect to get back

      const expected = {
        type: SET_COLLECTION,
        payload: collection,
      };
      // call function

      const action = setCollection(collection);
      // do assertion on function return
      expect(action.payload).toEqual(expected.payload);
    });
  });
});
