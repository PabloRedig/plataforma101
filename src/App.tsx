import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./Paginas/Home/Home";
import Contato from "./Paginas/Contato/Contato";
import Integrantes from "./Paginas/Integrantes/Integrantes";
import Evento from "./Paginas/Eventos/Evento";

import AdminLogin from "../src/Paginas/AdminLogin/AdminLogin";
import AdminDashboard from "../src/Paginas/AdminDashboard/AdminDashboard";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/eventos" element={<Evento />} />

          {/* Rotas do Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
