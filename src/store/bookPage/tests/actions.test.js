import { SET_BOOK_DETAILS, setBookDetails } from "../actions";

describe("#fetchBookDetails", () => {
  describe("if given an object of bookDetails", () => {
    test("should return an action object", () => {
      // test data simulating bookDetails
      const bookDetails = {};
      // build action we expect to get back
      const expected = {
        type: SET_BOOK_DETAILS,
        payload: bookDetails,
      };
      // call function
      const action = setBookDetails(bookDetails);
      // do assertion on function return
      expect(action).toEqual(expected);
    });

    test("action.payload should have the same length as the argument given", () => {
      // test data simulating bookDetails
      const bookDetails = {};
      // build action we expect to get back
      const expected = {
        type: SET_BOOK_DETAILS,
        payload: bookDetails,
      };

      // call function
      const action = setBookDetails(bookDetails);
      // do assertion on function return
      expect(Object.keys(action.payload)).toHaveLength(
        Object.keys(expected.payload).length
      );
    });
  });

  describe("if given a null argument", () => {
    test("action.payload should be null", () => {
      // test data simulating bookDetails
      const bookDetails = null;
      // build action we expect to get back

      const expected = {
        type: SET_BOOK_DETAILS,
        payload: bookDetails,
      };
      // call function

      const action = setBookDetails(bookDetails);
      // do assertion on function return
      expect(action.payload).toEqual(expected.payload);
    });
  });
});
