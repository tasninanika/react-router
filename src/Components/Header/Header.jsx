import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="text-center my-10">
      <span>Practice React Router</span>
      <nav className="my-10">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users" className="ms-4">
          Users
        </NavLink>
        <NavLink to="/about" className="ms-4">
          About
        </NavLink>
        <NavLink to="/contact" className="ms-4">
          Contact Us
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
