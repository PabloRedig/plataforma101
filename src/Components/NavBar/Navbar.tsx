import { NavLink } from "react-router-dom";
import "./Navbar.css"; // importa o CSS separado

export function Navbar() {
  return (
    <nav className="navbar">      
      <NavLink
        to="/contato"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Contato
      </NavLink>
      <NavLink
        to="/integrantes"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Integrantes
      </NavLink>
      <NavLink
        to="/eventos"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Eventos
      </NavLink>

      <NavLink
        to="/admin/login"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        login
      </NavLink>
    </nav>
  );
}
