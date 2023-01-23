import React from "react";
import Header from "./components/Header";
import Post from "./pages/Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Post />} />
      </Routes>
    </Router>
  );
}
