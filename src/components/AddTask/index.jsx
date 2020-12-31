import React, { useState } from 'react';

const AddTask = ({ usernameP, emailP, textP, createTask }) => {
  const [form, setFormdata] = useState({
    username: usernameP || '',
    email: emailP || '',
    text: textP || '',
  });
  const { username, email, text } = form;
  const onChange = (e) => {
    setFormdata({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createTask(form);
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
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Почтовый адресс</label>
          <input
            value={email}
            onChange={onChange}
            type="email"
            className="form-control"
            name="email"
            aria-describedby="email"
            placeholder="Введите почтовый адресс"
          />
        </div>
        <div className="form-group">
          <label htmlFor="text">Сообщение</label>
          <input
            value={text}
            onChange={onChange}
            type="text"
            className="form-control"
            name="text"
            aria-describedby="text"
            placeholder="text"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default AddTask;
