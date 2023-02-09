import React from "react";
import "./App.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
