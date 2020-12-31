import React, { useState } from 'react';

const TaskEdit = ({ usernameP, emailP, textP, createTask }) => {
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
        <div class="form-group">
          <label for="username">Имя пользователя</label>
          <input
            value={username}
            onChange={onChange}
            type="text"
            class="form-control"
            name="username"
            aria-describedby="username"
            placeholder="Enter username"
          />
        </div>
        <div class="form-group">
          <label for="email">Почтовый адресс</label>
          <input
            value={email}
            onChange={onChange}
            type="email"
            class="form-control"
            name="email"
            aria-describedby="email"
            placeholder="Введите почтовый адресс"
          />
        </div>
        <div class="form-group">
          <label for="text">Сообщение</label>
          <input
            value={text}
            onChange={onChange}
            type="text"
            class="form-control"
            name="text"
            aria-describedby="text"
            placeholder="text"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default TaskEdit;
