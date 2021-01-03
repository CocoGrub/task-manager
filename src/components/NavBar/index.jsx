import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { SetFilter,LogOUT } from '../../store/actions';

const NavBar = () => {
  const dispatch = useDispatch();
  const isLogin= useSelector(state=>state.isLogin)
  const onChange = (e) => {
    dispatch(SetFilter({ [e.target.name]: e.target.value }));
  };
  const onLogOut=()=>{
    dispatch(LogOUT())
  }

  return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >
          <NavLink to="/" className="navbar-brand">
           На главную
         </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
             <NavLink to="/createTask"
                       activeClassName="active"
                       className="nav-link"
                       aria-current="page">
                       Добавить задачу
             </NavLink>
            <NavDropdown title="Сортировка" id="collasible-nav-dropdown">
              <NavDropdown.Item >
                  <button name={'username'}
                          value={'desc'}
                          onClick={onChange}
                          className="dropdown-item">
                          По имени ↓
                  </button></NavDropdown.Item>
              <NavDropdown.Item>
                  <button name={'username'}
                          value={'asc'}
                          onClick={onChange}
                          className="dropdown-item">
                          По имени ↑
                  </button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                  <button name={'email'}
                          value={'desc'}
                          onClick={onChange}
                          className="dropdown-item">
                          По email ↓
                  </button>
              </NavDropdown.Item>
                <NavDropdown.Item >
                  <button name={'email'}
                          value={'asc'}
                          onClick={onChange}
                          className="dropdown-item">
                          По email ↑
                  </button>
              </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  <button name={'status'}
                          value={'desc'}
                          onClick={onChange}
                          className="dropdown-item">
                              По статусу ↓
                  </button>
              </NavDropdown.Item>
                <NavDropdown.Item >
                  <button name={'status'}
                          value={'asc'}
                          onClick={onChange}
                          className="dropdown-item">
                          По статусу ↑
                  </button>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
            {!isLogin ? (
                   <NavLink
                        to="/logIn"
                        activeClassName="active"
                        className="nav-link"
                        aria-current="page">
                        Войти
                    </NavLink>
                        ) : (
              <NavLink
                    onClick={onLogOut}
                    to="/logIn"
                    activeClassName="active"
                    className="nav-link"
                    aria-current="page">
                    Выйти
                </NavLink>)}
        </Navbar.Collapse>
      </Navbar>
  );
};

export default NavBar;
