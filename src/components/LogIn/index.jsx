import React, { useState } from 'react';

const LogIn = ({ logIn }) => {
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
        <div class="form-group">
          <label for="username">Имя пользователя</label>
          <input
            value={username}
            onChange={onChange}
            type="text"
            class="form-control"
            name="username"
            aria-describedby="username"
            placeholder="введите имя пользователя"
          />
        </div>
        <div class="form-group">
          <label for="email">Пароль</label>
          <input
            value={password}
            onChange={onChange}
            type="password"
            class="form-control"
            name="password"
            aria-describedby="password"
            placeholder="Введите пароль"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default LogIn;
