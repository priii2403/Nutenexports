import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import your CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div style={{backgroundColor:''}}  className="container-logo">
        <div className="navbar-brand">
          <Link to="/" className="logo">
           NUTAN-EXPORTS
          </Link>
        </div>
    
      </div>
      <div className="container-link">
  <div className="navbar-links">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="product-link">
        <Link to="/products">Products</Link>
        <div className="sub-menu">
          <ul>
            <li className="link"><Link to="/products/category1">Category 1</Link></li>
            <li  className="link"><Link to="/products/category2">Category 2</Link></li>
            <li  className="link"><Link to="/products/category3">Category 3</Link></li>
          </ul>
        </div>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
</div>

    </nav>
  );
}

export default Navbar;
