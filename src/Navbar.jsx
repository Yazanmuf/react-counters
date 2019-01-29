import React, { Component } from "react";
import "./Navbar.css";
import Logo from "./logo.png";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div>
        <nav>
          <div className="navbar" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt="Main Logo" />
            </a>
            <ul className="navbar mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  // tabindex="-1"
                  aria-disabled="true"
                >
                  <span className="badge badge-pill badge-secondary">
                    {this.props.totalCounter}
                  </span>
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
