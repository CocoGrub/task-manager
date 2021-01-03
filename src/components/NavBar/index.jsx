import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SetFilter,LogOUT } from '../../store/actions';

const NavBar = () => {
  const dispatch = useDispatch();
  const isLogin= useSelector(state=>state.isLogin)
  const onChange = (e) => {
    dispatch(SetFilter({ [e.target.name]: e.target.value }));
    setShow(!show);
  };
  const onLogOut=()=>{
    dispatch(LogOUT())
  }
  const [show, setShow] = useState(false);
  const showDropDown = () => {
    setShow(!show);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          На главную
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/createTask"
                activeClassName="active"
                className="nav-link"
                aria-current="page">
                Добавить задачу
              </NavLink>
            </li>

            <li className="nav-item dropdown show">
              <button
                onClick={showDropDown}
                className="btn btn-info dropdown-toggle"
                id="navbarDropdown"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true">
                Сортировка
              </button>
              <div
                className={show ? 'dropdown-menu show' : 'dropdown-menu'}
                aria-labelledby="navbarDropdown">
                <button
                  name={'username'}
                  value={'desc'}
                  onClick={onChange}
                  className="dropdown-item"
                  >
                  По имени ↓
                </button>
                <button
                  name={'username'}
                  value={'asc'}
                  onClick={onChange}
                  className="dropdown-item"
                  >
                  По имени ↑
                </button>
                <div className="dropdown-divider"/>
                <button
                  name={'email'}
                  value={'desc'}
                  onClick={onChange}
                  className="dropdown-item"
                  >
                  По email ↓
                </button>
                <button
                  name={'email'}
                  value={'asc'}
                  onClick={onChange}
                  className="dropdown-item"
                  >
                  По email ↑
                </button>
                <div className="dropdown-divider"/>
                <button
                  name={'status'}
                  value={'desc'}
                  onClick={onChange}
                  className="dropdown-item"
                  >
                  По статусу ↓
                </button>
                <button
                  name={'status'}
                  value={'asc'}
                  onClick={onChange}
                  className="dropdown-item"
                  >
                  По статусу ↑
                </button>
              </div>
            </li>
          </ul>
          <ul className="nav navbar-nav ml-auto" style={{cursor:'pointer'}}>
            {!isLogin ? (
                <li className="nav-item" >
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
                  <div className="nav-link" onClick={onLogOut}>
                    Выйти
                  </div>
                </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
