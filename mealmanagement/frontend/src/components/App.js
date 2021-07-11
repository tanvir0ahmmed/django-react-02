import ReactDOM from "react-dom";
import React, { useEffect } from "react";

export default function App() {
  const axios = require("axios");

  // Make a request for a user with a given ID
  useEffect(() => {
    console.log("hello");
    axios
      .get("/api/articles/")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  });

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
