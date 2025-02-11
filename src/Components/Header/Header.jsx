const Header = () => {
  return (
    <div className="text-center my-20">
      <h2>Navbar</h2>
      <nav>
        <a href="/" className="">
          Home
        </a>
        <a href="/about" className="ms-4">
          About
        </a>
        <a href="/contact" className="ms-4">
          Contact Us
        </a>
      </nav>
    </div>
  );
};

export default Header;
