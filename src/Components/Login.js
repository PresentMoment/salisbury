import React, { useContext, useState, useEffect } from "react";
import ContentContext from "./AuthContext";

export default function Login() {
  const { setAuthenticated } = useContext(ContentContext);

  function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.sessionStorage.getItem(key);
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });
    if (value === "alaska") {
      setAuthenticated(true);
    }
    useEffect(() => {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  const [password, setPassword] = useStickyState("");

  return (
    <div style={{ height: "100%", width: "100%", display: "flex" }}>
      <form style={{ margin: "auto" }}>
        <input
          type="text"
          name="name"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
}
