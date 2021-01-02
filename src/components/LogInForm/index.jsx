import React, { useState,useEffect} from 'react';
import {Redirect} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {logInAsync} from '../../store/actions'


const LogInForm = ({history,isLogin,loginError }) => {
  const dispatch=useDispatch()
  useEffect(()=>{
    console.log(isLogin)
    if( isLogin){
      history.push('/')
    }
  },[isLogin])




  const [form, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = form;
  const onChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit =(e) => {
    e.preventDefault();
    dispatch(logInAsync(form))
    }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Имя пользователя</label>
          <input
              required
            value={username}
            onChange={onChange}
            type="text"
            className="form-control"
            name="username"
            aria-describedby="username"
            placeholder="введите имя пользователя"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Пароль</label>
          <input
              required
            value={password}
            onChange={onChange}
            type="password"
            className="form-control"
            name="password"
            aria-describedby="password"
            placeholder="Введите пароль"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>
      {loginError && <div style={{margin:'2em 0'}} className="alert alert-danger" role="alert">
         Пользователь или пароль не найдены
      </div>}
    </div>
  );
};

export default LogInForm;
