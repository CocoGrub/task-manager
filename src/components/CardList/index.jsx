import React from 'react';
import Card from '../Card';

const arr = Array(10)
  .fill(0)
  .map((_, i) => i);

const CardList = () => {
  return (
    <div>
      {arr.map((item) => (
        <Card />
      ))}
    </div>
  );
};

export default CardList;
