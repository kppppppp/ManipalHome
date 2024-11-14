import React from 'react';
import './css/Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid d-flex justify-content-between-around align-items-center">  
          <a className="navbar-brand" href="#">  
            <img src="https://www.onlinemanipal.com/wp-content/themes/flamingo/images/logo.webp" alt="Online Manipal" className="navbar-logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse w-100" id="navbarNavDropdown">
            <ul className="navbar-nav ms-3">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-bold text-black"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-black" href="#">Institutions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-black" href="#">Online Manipal Plus</a>
              </li>
            </ul>

            <div className="ms-auto">
              <button className="btn font-weight-bold text-white">Enroll Now</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
