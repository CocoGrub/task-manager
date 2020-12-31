import React from 'react';

const Card = ({ email, id, status, text, username }) => {
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
        </div>
      </div>
    </div>
  );
};

export default Card;
