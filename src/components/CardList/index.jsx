import { useSelector } from 'react-redux';
import React from 'react';
import Card from '../Card';

const CardList = () => {
  const items = useSelector((state) => state.items);
  const isLogin = useSelector((state) => state.isLogin);
  return (
    <div className="row">
      {items.map((item, i) => (
        <Card key={i} {...item} isLogin={isLogin} />
      ))}
    </div>
  );
};

export default CardList;
