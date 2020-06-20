import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCollection } from "../../store/collectionPage/selectors";
import {
  addNewBook,
  fetchCollection,
  setCollection,
} from "../../store/collectionPage/actions";
import { selectToken } from "../../store/user/selectors";
import { selectUser } from "../../store/user/selectors";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "./index.css";

export default function CollectionPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const token = useSelector(selectToken);
  const collection = useSelector(selectCollection);
  const user = useSelector(selectUser);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(fetchCollection(id));
  }, [dispatch, setCollection]);

  const setStars = (rating) => {
    let stars = "";

    for (let index = 0; index < 5; index++) {
      stars += index < rating ? "★" : "☆";
    }

    return stars;
  };

  function submitForm(event) {
    event.preventDefault();
    dispatch(addNewBook(providedData));
    const providedData = {
      title: title,
      author: author,
      image: image,
      isbn: isbn,
      category: category,
      description: description,
      rating: rating,
    };

    setTitle("");
    setAuthor("");
    setIsbn("");
    setCategory("");
    setDescription("");
    setRating("");
    setImage("");
  }
  console.log("user", user.id);

  return (
    <div>
      <h1 className="collectionHeader">{collection[0]?.collection.name}</h1>
      <div className="allBooksContainer">
        {collection.length > 0 &&
          collection.map((item) => (
            <div key={item.id} className="bookContainer">
              {item.reviewId && <h6 className="reviewed">reviewed</h6>}
              <h5>{setStars(item.rating)}</h5>

              <img src={item.book.image} className="bookImage" />
              <h5>{item.book.author}</h5>
              <h5 className="collectionBookTitle">{item.book.title}</h5>
              <hr />
              <Link to={`/book/${item.book.id}`} key={item.id}>
                <h6>details</h6>
              </Link>
            </div>
          ))}
      </div>
      {token && collection[0]?.collection.userId === user.id && (
        <>
          <Container className="addBookForm">
            <Form as={Col} xs={6} sm={6} md={5} lg={4} xl={4}>
              <h4 className="mt-5 mb-5">Add new book</h4>

              <Form.Group controlId="formBasicName">
                <Form.Label>ISBN</Form.Label>
                <Form.Control
                  value={isbn}
                  onChange={(event) => setIsbn(event.target.value)}
                  type="text"
                  placeholder="ISBN"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  value={author}
                  onChange={(event) => setAuthor(event.target.value)}
                  type="text"
                  placeholder="Book author"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  type="text"
                  placeholder="Book title"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  type="text"
                  placeholder="Book category"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label>Book cover - url</Form.Label>
                <Form.Control
                  value={image}
                  onChange={(event) => setImage(event.target.value)}
                  type="text"
                  placeholder="image url"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  type="text"
                  placeholder="Short description"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicName">
                <Form.Label>How many stars 1-5</Form.Label>
                <Form.Control
                  value={rating}
                  onChange={(event) => setRating(event.target.value)}
                  type="text"
                  placeholder="Provide number 1-5"
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
    </div>
  );
}
