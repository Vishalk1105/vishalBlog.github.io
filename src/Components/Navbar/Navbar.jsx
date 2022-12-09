import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to={'/Postlist'} className="nav-link active"
                  aria-current="page"> <h2 className="navbar-brand">Blog Post</h2></Link>
         

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/*Link is used to route a specific page with the help of 'to' attribute */}
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/Postlist"}
                >
                  Post List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/userspage"}>
                  User Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
              </nav>
            <Outlet />
           
      {/*
      Outlet is the property of React Router DOM which display all the child Components
  below navBar (navbar will be persistent)*/}
    </div>
  );
};
