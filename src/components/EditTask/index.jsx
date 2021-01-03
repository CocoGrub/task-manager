import React, { useState, useEffect } from 'react';
import  {editTask} from '../../store/actions'
import {useDispatch, useSelector} from 'react-redux';
const EditTask = (props) => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    ...props.location.state,
  });
  console.log(formData,'edit')
  const { username, email, text, status, id } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, text:{...formData.text,edited:e.target.value} });
  };
  const onCheck=(e)=>{
    setFormData({...formData,status:e.target.checked?10:0})
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if(localStorage.getItem('token')){
      const data={
        id:id,
        status:formData.status,
        text:JSON.stringify({original: text.original,edited:text.edited})
      }
      dispatch(editTask(data))
      props.history.push('/');
    }
    props.history.push('/logIn');
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
            value={text.edited?text.edited:text.original}
            onChange={onChange}
            type="text"
            className="form-control"
            name="text"
            aria-describedby="text"
            placeholder="text"
          />
        </div>
        <div className="form-group">
          <div className="form-check-inline">
            <label className="form-check-label">
              <input checked={status} value={status} onChange={onCheck} type="checkbox" className="form-check-input" />
              Задача выполнена
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Отправить
        </button>
      </form>
    </div>
  );
};

export default EditTask;
