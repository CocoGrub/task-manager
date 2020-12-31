import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ email, id, status, text, username, isLogin }) => {
  return (
    <div className="col-sm-4 ">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h4>{username}</h4>
            <h6>{email}</h6>
          </div>
          <p className="card-text">{text}</p>
          <div className="float-right">{status}</div>
          {isLogin && (
            <Link
              className="btn btn-primary"
              to={{
                pathname: '/task/' + id,
                state: { email, id, status, text, username, isLogin },
              }}>
              Редактировать
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
