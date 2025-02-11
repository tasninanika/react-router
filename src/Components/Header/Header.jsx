import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-center my-20">
      <h2>Navbar</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
