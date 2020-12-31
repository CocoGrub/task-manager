import { useSelector } from 'react-redux';
import React from 'react';
import Card from '../Card';

const CardList = () => {
  const items = useSelector((state) => state.items);
  return (
    <div className="row">
      {items.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  );
};

export default CardList;
