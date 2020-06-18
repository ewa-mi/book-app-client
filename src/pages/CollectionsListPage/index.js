import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setReviewBoard, fetchFullData } from "../../store/homepage/actions";
import { selectReviewBoardData } from "../../store/homepage/selectors";
import "./index.css";

export default function CollectionsListPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const reviewBoard = useSelector(selectReviewBoardData);

  useEffect(() => {
    dispatch(fetchFullData());
  }, [dispatch, setReviewBoard]);

  const userCollections = reviewBoard.filter(
    (item) => item.collection.user.id === parseInt(id)
  );

  const duplicatedCollections = userCollections.map((item) => item.collection);

  const uniqueCollections = Array.from(
    new Set(duplicatedCollections.map((a) => a.id))
  ).map((id) => {
    return duplicatedCollections.find((a) => a.id === id);
  });

  const userName = userCollections[0]?.collection.user.name;
  if (!reviewBoard.length) {
    return [];
  }

  return (
    <>
      <h1 className="userName">{userName}'s collections</h1>
      <div className="collectionsContainer">
        {uniqueCollections.map((item) => (
          <div key={item.id} className="collection">
            <h3 className="collectionName">{item.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
