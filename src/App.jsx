import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ukm from "./pages/Ukm";
import Artikel from "./pages/Artikel";
import ArtikelDetail from "./pages/ArticleDetail";
import Layanan from "./pages/Layanan";
import Galeri from "./pages/Galeri";
import Kontak from "./pages/Kontak";
import Public from "./Public";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Public />}>
          <Route index element={<Home />} />
          <Route path="ukm" element={<Ukm />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="artikel/:id" element={<ArtikelDetail />} />
          <Route path="layanan" element={<Layanan />} />
          <Route path="galeri" element={<Galeri />} />
          <Route path="kontak" element={<Kontak />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
