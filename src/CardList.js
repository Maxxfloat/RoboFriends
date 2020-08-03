import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ robots }) => {
  return (
    <div className="container">
      {
        robots.map((user, indexid) => {
          return (
            <Card
              key={robots[indexid].id}
              id={robots[indexid].id}
              name={robots[indexid].name}
              email={robots[indexid].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;