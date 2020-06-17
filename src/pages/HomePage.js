import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setReviewBoard, fetchFullData } from "../store/homepage/actions";
import { selectReviewBoardData } from "../store/homepage/selectors";
import "./HomePage.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const reviewBoard = useSelector(selectReviewBoardData);
  console.log("show response", reviewBoard);

  useEffect(() => {
    dispatch(fetchFullData());
  }, [dispatch, setReviewBoard]);
  return (
    <>
      <h1 className="header">Welcome to Book App</h1>
      <div className="grid">
        <div className="leftColumn">
          <h6>left column</h6>
        </div>
        <div className="middleColumn">
          <h5>middle column</h5>
          {reviewBoard.length > 0 &&
            reviewBoard.map((item) => {
              if (!item.review) {
                return;
              }

              return (
                <div className="oneBoard" key={item.id}>
                  <h4>
                    {item.book.author}, <span></span>
                    {item.book.title}
                  </h4>
                  <h6>rating: {item.rating}</h6>
                  <img src={item.book.image} className="image" />
                  <h5>{item.review.title}</h5>
                  <p>{item.review.createdAt}</p>
                  <h5>review by: {item.collection.user.name}</h5>
                  <p>{item.review.content}</p>
                  <p>{item.review.likes} likes</p>
                  <Link to={`/book/${item.id}`}>more </Link>
                </div>
              );
            })}
        </div>
        <div className="rightColumn">
          <h6>right column</h6>
        </div>
      </div>
    </>
  );
}
