import { SET_BOOK_DETAILS, setBookDetails, fetchBookDetails } from "../actions";
import { APP_LOADING, APP_DONE_LOADING } from "../../appState/actions";
import axios from "axios";

jest.mock("axios");

describe("#setBookDetails", () => {
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

// MOCKING FUNCTION

describe("#fetchBookDetails", () => {
  describe("when called", () => {
    test("should dispatch an appLoading", async () => {
      const responseData = { fakeBookDetails: {} };
      axios.get.mockImplementationOnce(() => Promise.resolve(responseData));
      const dispatch = jest.fn();
      await fetchBookDetails("collectionId", "bookId")(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith({
        type: APP_LOADING,
      });
      expect(dispatch).toHaveBeenCalledTimes(3);
    });

    test("should dispatch a setBookDetails", async () => {
      const responseData = { fakeBookDetails: {} };
      axios.get.mockImplementationOnce(() => Promise.resolve(responseData));
      const dispatch = jest.fn();
      await fetchBookDetails("collectionId", "bookId")(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith({
        payload: undefined,
        type: SET_BOOK_DETAILS,
      });
      expect(dispatch).toHaveBeenCalledTimes(3);
    });

    test("should dispatch an appDoneLoading", async () => {
      const responseData = { fakeBookDetails: {} };
      axios.get.mockImplementationOnce(() => Promise.resolve(responseData));
      const dispatch = jest.fn();
      await fetchBookDetails("collectionId", "bookId")(dispatch);

      expect(dispatch).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith({
        type: APP_DONE_LOADING,
      });
      expect(dispatch).toHaveBeenCalledTimes(3);
    });
  });
});
