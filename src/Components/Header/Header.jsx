import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center my-10">
      <span>Practice React Router</span>
      <nav className="my-10">
        <Link to="/">Home</Link>
        <Link to="/about" className="ms-4">
          About
        </Link>
        <Link to="/contact" className="ms-4">
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Header;
