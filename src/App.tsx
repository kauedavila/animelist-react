import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages";
import "./index.css";
import { useState } from "react";

function App() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <Router>
      <Header text={searchInput} setText={setSearchInput} />
      <Routes>
        <Route path="/" element={<Home text={searchInput} />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
