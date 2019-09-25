import React from "react";
import "./App.css";
import PhotoList from "./components/PhotoList";

function App() {
  return (
    <div className="App">
      <h1>
        NASA Photo of the day
      </h1>
      <PhotoList />
    </div>
  );
}

export default App;
