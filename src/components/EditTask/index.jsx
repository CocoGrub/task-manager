import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
const EditTask = (props) => {
  const [formData, setFormData] = useState({
    ...props.location.state,
  });

  const { username, email, text, status, id } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.editTask(id, text, status);
    props.history.push('/');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <p className="form-control">{username}</p>
        </div>
        <div className="form-group">
          <p className="form-control">{email}</p>
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
        <div className="form-group">
          <label htmlFor="text">Статус задачи</label>
          <select
            name="status"
            value={status}
            onChange={onChange}
            className="custom-select custom-select-lg mb-3">
            <option value="0">0</option>
            <option value="10">10</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default EditTask;
