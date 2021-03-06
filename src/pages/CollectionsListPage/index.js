import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUserCollections } from "../../store/collectionsList/selectors";
import {
  addNewCollection,
  fetchUserCollections,
  setUserCollections,
} from "../../store/collectionsList/actions";
import { selectToken } from "../../store/user/selectors";
import { selectUser } from "../../store/user/selectors";

import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "./index.css";

export default function CollectionsListPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [collectionName, setCollectionName] = useState("");
  const token = useSelector(selectToken);
  const userCollections = useSelector(selectUserCollections);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchUserCollections(id));
  }, [dispatch, setUserCollections]);

  function submitForm(event) {
    event.preventDefault();
    dispatch(addNewCollection(collectionName));

    setCollectionName("");
  }

  return (
    <>
      <h1 className="userName">
        {userCollections[0]?.user.name || user.name}'s collections
      </h1>
      <div className="collectionsContainer">
        {userCollections?.map((item) => (
          <Link
            to={`/collection/${item.id}`}
            key={item.id}
            className="collection"
          >
            <h3 className="collectionName">{item.name}</h3>
          </Link>
        ))}
      </div>
      {token && parseInt(id) === user.id && (
        <>
          <Container className="addCollectionForm">
            <Form as={Col} xs={6} sm={6} md={5} lg={4} xl={4}>
              <h4 className="mt-5 mb-5">Add new collection</h4>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={collectionName}
                  onChange={(event) => setCollectionName(event.target.value)}
                  type="text"
                  placeholder="Name of your collection"
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
