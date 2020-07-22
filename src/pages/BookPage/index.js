import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectBookDetails } from "../../store/bookPage/selectors";
import {
  fetchBookDetails,
  setBookDetails,
  addNewReview,
  updateAmountOfLikes,
} from "../../store/bookPage/actions";
import { selectToken, selectUser } from "../../store/user/selectors";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "./index.css";

export default function BookPage() {
  const dispatch = useDispatch();
  let { collectionId, bookId } = useParams();
  const bookDetails = useSelector(selectBookDetails);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewContent, setReviewContent] = useState("");

  useEffect(() => {
    dispatch(fetchBookDetails(collectionId, bookId));
  }, [dispatch, setBookDetails]);

  function submitForm(event) {
    event.preventDefault();

    const newReviewData = {
      reviewTitle,
      reviewContent,
      collectionId,
      bookId,
    };

    dispatch(addNewReview(newReviewData));
  }

  if (!Object.keys(bookDetails).length) {
    return [];
  }

  const setStars = (rating) => {
    let stars = "";

    for (let index = 0; index < 5; index++) {
      stars += index < rating ? "★" : "☆";
    }

    return stars;
  };

  const addLike = () => {
    dispatch(updateAmountOfLikes(bookDetails));
  };

  return (
    <>
      <h1 className="bookPageHeader">
        {bookDetails.book.author} - {bookDetails.book.title}
      </h1>
      <div className="bookPageMain">
        <div className="bookFrame">
          <div>
            <h5>{setStars(bookDetails.rating)}</h5>
            <img
              src={bookDetails.book.image}
              className="bookImg"
              alt="book cover"
            />
          </div>
          <div className="bookDetails">
            <h6>
              Collector -{" "}
              <Link to={`/collectionslist/${bookDetails.collection.user.id}`}>
                {bookDetails.collection.user.name}
              </Link>
            </h6>
            <h6>
              Collection -{" "}
              <Link to={`/collection/${bookDetails.collection.id}`}>
                {bookDetails.collection.name}
              </Link>
            </h6>
            <hr></hr>
            <h6>ISBN - {bookDetails.book.ISBN}</h6>
            <h6>Category - {bookDetails.book.category}</h6>
            <hr></hr>
            <h6>Description </h6>
            <p>{bookDetails.book.description}</p>
          </div>
        </div>
        {bookDetails.review && (
          <div className="bookReview">
            <h4>{bookDetails.review.title}</h4>
            <p>{bookDetails.review.createdAt.split("T")[0]}</p>
            <p>{bookDetails.review.content}</p>
            <h5 className="likesNumber">{bookDetails.review.likes}</h5>
            <button className="heartButton" onClick={() => addLike()}>
              <span role="img" aria-label="heart" className="heartEmoji">
                🖤
              </span>
            </button>
          </div>
        )}
      </div>
      {token &&
        !bookDetails.review &&
        bookDetails.collection.user.id === user.id && (
          <>
            <Container className="addReviewForm">
              <Form as={Col} xs={6} sm={6} md={5} lg={4} xl={4}>
                <h4 className="mt-5 mb-5">Add review</h4>
                <Form.Group controlId="formBasicTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    value={reviewTitle}
                    onChange={(event) => setReviewTitle(event.target.value)}
                    type="text"
                    placeholder="Review title"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicContent">
                  <Form.Label>Content</Form.Label>
                  <Form.Control
                    value={reviewContent}
                    onChange={(event) => setReviewContent(event.target.value)}
                    as="textarea"
                    placeholder="Write your review here"
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-5">
                  <Button variant="primary" type="submit" onClick={submitForm}>
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </Container>
          </>
        )}
    </>
  );
}
