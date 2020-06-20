import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCollection } from "../../store/collectionPage/selectors";
import {
  // addCollection,
  fetchCollection,
  setCollection,
} from "../../store/collectionPage/actions";
import { selectToken } from "../../store/user/selectors";
import { selectUser } from "../../store/user/selectors";

// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
// import { Col } from "react-bootstrap";
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
    </div>
  );
}
