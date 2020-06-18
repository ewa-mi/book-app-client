import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setReviewBoard, fetchFullData } from "../../store/homepage/actions";
import { selectReviewBoardData } from "../../store/homepage/selectors";
import "./index.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const reviewBoard = useSelector(selectReviewBoardData);

  useEffect(() => {
    dispatch(fetchFullData());
  }, [dispatch, setReviewBoard]);
  return (
    <>
      <h1 className="header">Welcome to Book App</h1>
      <div className="grid">
        <div className="leftColumn">
          <h6 className="columnHeader">BOOK RECOMMENDATIONS</h6>
        </div>
        <div className="middleColumn">
          <h6 className="columnHeader">RECENT REVIEWS</h6>
          {reviewBoard.length > 0 &&
            reviewBoard.map((item) => {
              if (!item.review) {
                return;
              }

              const truncateReviewText =
                item.review.content.substr(0, 200) + "...";

              return (
                <div className="oneBoard" key={item.id}>
                  <h3 className="bookTitle">{`${item.book.author} - ${item.book.title}`}</h3>

                  <div className="reviewBodyWrapper">
                    <img src={item.book.image} className="reviewImage" />
                    <div className="reviewRightSide">
                      <div className="reviewTitleWrapper">
                        <h4 className="reviewTitle">{item.review.title}</h4>
                        <Link
                          to={`/collectionslist/${item.collection.user.id}`}
                          className="reviewAuthor"
                        >
                          by {item.collection.user.name}
                        </Link>
                      </div>
                      <p className="reviewDate">
                        {item.review.createdAt.split("T")[0]}
                      </p>

                      <p className="reviewText">{truncateReviewText}</p>
                      <div className="reviewFooter">
                        <p className="reviewLikes">
                          {item.review.likes}{" "}
                          <span
                            role="img"
                            aria-label="heart"
                            className="heartEmoji"
                          >
                            🖤
                          </span>
                        </p>
                        <div className="reviewMore">
                          <Link to={`/book/${item.id}`}>...more</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="rightColumn">
          <h6 className="columnHeader">NEWS</h6>
        </div>
      </div>
    </>
  );
}