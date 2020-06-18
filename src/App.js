import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import CollectionsListPage from "./pages/CollectionsListPage";
import CollectionPage from "./pages/CollectionPage";
import BookPage from "./pages/BookPage";
import { selectUser } from "./store/user/selectors";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/collectionslist/:id" component={CollectionsListPage} />
        <Route path="/collection/:id" component={CollectionPage} />
        <Route path="/book/:id" component={BookPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}
