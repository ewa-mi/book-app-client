import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCollection } from "../../store/collectionPage/selectors";
import {
  addCollection,
  fetchCollection,
  setCollection,
} from "../../store/collectionPage/actions";
import { selectToken } from "../../store/user/selectors";
import { selectUser } from "../../store/user/selectors";
import "./index.css";

export default function CollectionPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const token = useSelector(selectToken);
  const collection = useSelector(selectCollection);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchCollection(id));
  }, [dispatch, setCollection]);
  return (
    <>
      <h1 className="collectionHeader">{collection[0]?.collection.name}</h1>
    </>
  );
}
