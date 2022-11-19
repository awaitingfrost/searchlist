import React from "react";
import { useState } from "react";
import "./app.css";

import { Users } from "./users";
import table from "./table";

const App = () => {
  const [query, setQuery] = useState("");
  console.log(query);
  return (
    <div className="app">
      <input
        type="text"
        placeholder="SEARCH"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
            <h1>slfsldjlsdflldsfj</h1>
          </li>
        ))}
      </ul>

      <table />
    </div>
  );
};

export default App;
