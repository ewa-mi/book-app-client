import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionsListPage from "./pages/CollectionsListPage";
import CollectionPage from "./pages/CollectionPage";
import BookPage from "./pages/BookPage";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/collectionslist/:id" component={CollectionsListPage} />
        <Route path="/collection/:id" component={CollectionPage} />
        <Route path="/book/:id" component={BookPage} />
      </Switch>
    </div>
  );
}
