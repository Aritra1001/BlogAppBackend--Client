import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">My Blog</Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item mx-4">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/bollywood">
                  Bollywood
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/technology">
                  Technology
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/hollywood">
                  Hollywood
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/sport">
                  Sports
                </NavLink>
              </li>
              <li className="nav-item mx-4">
                <NavLink className="nav-link" to="/food">
                  Food
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
