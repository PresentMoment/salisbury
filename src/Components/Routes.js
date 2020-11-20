import React, { useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import App from "../App";

import ContentContext from "./AuthContext";

export default function Routes() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Switch>
        <ContentContext.Provider value={{ isAuthenticated, setAuthenticated }}>
          <ProtectedRoute path="/" component={App} />
        </ContentContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
