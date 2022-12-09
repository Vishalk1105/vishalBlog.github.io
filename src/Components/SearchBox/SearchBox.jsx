import React from "react";

export const SearchBox = ({ onChangeHandler }) => {
  return (
    <div>
      <nav className="navbar bg-light ">
        <div className="container-fluid">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onChangeHandler}
            />
          </form>
        </div>
      </nav>
    </div>
  );
};
