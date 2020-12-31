import React, { useState } from 'react';

const LogInForm = ({ logIn }) => {
  const [form, setFormdata] = useState({
    username: '',
    password: '',
  });
  const { username, password } = form;
  const onChange = (e) => {
    setFormdata({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    logIn(form);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Имя пользователя</label>
          <input
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
    </div>
  );
};

export default LogInForm;
