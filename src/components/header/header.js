import React from 'react';
import './style.css'
const Header = ({todos}) => {

  const active = todos.filter((el) => {
    return el.isActive === true
  }).length;
  const done = todos.filter((el) => {
    return el.isActive === false
  }).length;


  return (
    <div className='header'>
      <h1>Todo List</h1>
      <h6>{active} more to do, {done} done</h6>
   </div>
  );
};

export default Header;