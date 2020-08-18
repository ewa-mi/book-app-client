import { SET_USER_COLLECTIONS, setUserCollections } from "../actions";

describe("#setUserCollections", () => {
  describe("if given an array of user's collections", () => {
    test("should return an action object", () => {
      // test data simulating user collections
      const userCollections = [];
      // build action we expect to get back
      const expected = {
        type: SET_USER_COLLECTIONS,
        payload: userCollections,
      };
      // call function
      const action = setUserCollections(userCollections);
      // do assertion on function return
      expect(action).toEqual(expected);
    });

    test("action.payload should have the same length as the argument given", () => {
      // test data simulating collection
      const userCollections = [];
      // build action we expect to get back
      const expected = {
        type: SET_USER_COLLECTIONS,
        payload: userCollections,
      };

      // call function
      const action = setUserCollections(userCollections);
      // do assertion on function return
      expect(action.payload).toHaveLength(expected.payload.length);
    });
  });
});
