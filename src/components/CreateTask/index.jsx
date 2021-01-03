import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {createTask} from "../../store/actions";

const AddTask = ({history}) => {
  const dispatch=useDispatch()
  const [form, setForm] = useState({
    username:'',
    email:'',
    text:'',
  });
  const { username, email, text } = form;

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const formData=new FormData()
    formData.set('username', username);
    formData.set('email', email);
    formData.set('text', JSON.stringify({original: text}));
    dispatch(createTask(formData))
    history.push('/')
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Имя пользователя</label>
          <input required
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
          <label htmlFor="email">Почтовый адрес</label>
          <input
              required
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
              required
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
