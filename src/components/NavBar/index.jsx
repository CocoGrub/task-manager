import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = ({ isLogin, logMeOut }) => {
  const filter = useSelector((state) => state.filter);
  const [filterState, setFilterState] = useState('');
  useEffect(() => {
    setFilterState(filter);
  }, []);
  const onChange = (e) => {
    setFilterState({ ...filterState, [e.target.name]: e.target.name });
  };
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
            <li className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
              <label htmlfor="sort_field" style={{ margin: '0 2px' }}>
                Сортировка
              </label>
              <select name="sort_field" className="custom-select" id="inputGroupSelect01">
                <option value="desk"> По имени ↓</option>
                <option value="asc">По имени ↑</option>
                <option value="desk"> По email ↓</option>
                <option value="asc"> По email ↑</option>
                <option value="desk">По статусу ↓</option>
                <option value="asc"> По статусу ↑</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
