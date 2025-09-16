import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './Components/NavBar/Navbar'


import './App.css'
import Home from "./Paginas/Home/Home";
import Contato from "./Paginas/Contato/Contato";
import Integrantes from "./Paginas/Integrantes/Integrantes";
import Evento from "./Paginas/Eventos/Evento";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/eventos" element={<Evento />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
