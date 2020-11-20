import React, { useContext } from "react";
import ContentContext from "./AuthContext";
import Login from "./Login";

export default function ProtectedRoute(props) {
  const Component = props.component;
  const { isAuthenticated } = useContext(ContentContext);
  return isAuthenticated ? <Component /> : <Login />;
}
