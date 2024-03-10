import React from 'react';

const BoardListItem = ({ title, icon }) => {

  return (
    <li>
      <span>{icon}</span>
      <h2>{title}</h2>
    </li>
  );
};

export default BoardListItem;
