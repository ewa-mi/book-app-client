import React from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import HomePage from "./pages/HomePage";
import CollectionsListPage from "./pages/CollectionsListPage";
import CollectionPage from "./pages/CollectionPage";
import BookPage from "./pages/BookPage";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const isLoading = useSelector(selectAppLoading);

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
      </Switch>
    </div>
  );
}
