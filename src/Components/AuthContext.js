import { createContext } from "react";

const ContentContext = createContext({
  isAuthenticated: false,
  setAuthenticated: () => {},
});

export default ContentContext;
