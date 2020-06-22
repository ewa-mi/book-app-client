import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectBookDetails } from "../../store/bookPage/selectors";
import { fetchBookDetails, setBookDetails } from "../../store/bookPage/actions";
import { selectToken, selectUser } from "../../store/user/selectors";
import "./index.css";

export default function BookPage() {
  const dispatch = useDispatch();
  let { collectionId, bookId } = useParams();
  const bookDetails = useSelector(selectBookDetails);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchBookDetails(collectionId, bookId));
  }, [dispatch, setBookDetails]);

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

  return (
    <>
      <h1 className="bookPageHeader">
        {bookDetails.book.author} - {bookDetails.book.title}
      </h1>
      <div className="bookPageMain">
        <div className="bookFrame">
          <div>
            <h5>{setStars(bookDetails.rating)}</h5>
            <img src={bookDetails.book.image} className="bookImg" />
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
        <div className="bookReview">
          {bookDetails.review && (
            <>
              <h4>{bookDetails.review.title}</h4>
              <p>{bookDetails.review.createdAt.split("T")[0]}</p>
              <p>{bookDetails.review.content}</p>
              <h5>{bookDetails.review.likes} 🖤</h5>
            </>
          )}
        </div>
      </div>
    </>
  );
}

{
  /* <Link
  to={`/collectionslist/${bookDetails.collection.user.id}`}
>
  {item.collection.user.name}
</Link>; */
}
