import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection/CollectionPage";

import "./shoppage.scss";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route
      exact
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    />
  </div>
);

export default ShopPage;
