import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./Pages/Welcome";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
