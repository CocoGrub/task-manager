import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ isLogin, logMeOut }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/taskEdit"
                activeClassName="active"
                className="nav-link"
                aria-current="page">
                Добавить задачу
              </NavLink>
            </li>
            {!isLogin ? (
              <li className="nav-item">
                <NavLink
                  to="/logIn"
                  activeClassName="active"
                  className="nav-link"
                  aria-current="page">
                  Войти
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <div className="nav-link" onClick={logMeOut}>
                  Выйти
                </div>
              </li>
            )}

            <li className="nav-item"></li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
