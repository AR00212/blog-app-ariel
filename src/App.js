import React from "react"; // importante para usar hooks y JSX
import logo from './assets/logo.png'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostDetails from "./pages/PostDatails";
import "./styles/App.css"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* HEADER */}
        <header className="app-header">
          <img src={logo} alt="Logo Ariel" className="app-logo" />
          <h1 className="app-title">Blog Prueba Técnica</h1>
        </header>

        {/* RUTAS */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
