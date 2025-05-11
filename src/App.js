import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "./pages/Order";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
