import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            🏠 Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            ❤️ Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;