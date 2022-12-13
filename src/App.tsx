import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages";
import "./index.css";
import { useState } from "react";
import AnimePage from "./pages/anime-page";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [animeId, setAnimeId] = useState(0);

  return (
    <Router>
      <Header text={searchInput} setText={setSearchInput} />
      <Routes>
        <Route path="/anime/:id" element={<AnimePage />} />
        <Route path="/" element={<Home text={searchInput} />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
