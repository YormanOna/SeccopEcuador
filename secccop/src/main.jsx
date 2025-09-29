import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import CursoDetalle from "./pages/CursoDetalle";
import Asesoria from "./pages/Asesoria";
import Contacto from "./pages/Contacto";
import Cronograma from "./pages/Cronograma";
import Galeria from "./pages/Galeria";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/:id" element={<CursoDetalle />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/asesoria" element={<Asesoria />} />
          <Route path="/cronograma" element={<Cronograma />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
