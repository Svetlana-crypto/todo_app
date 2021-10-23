import React from 'react';
import Todo from "../todo";

const TodoList = ({todos, setTodos, filteredTodos, searchInputText}) => {
  return (
    <ul className='list-group'>
      {
        filteredTodos
          .filter((todo) =>todo.todoName.includes(searchInputText))
          .map((todoItem, idx) =>
            <Todo
              key={todoItem.id}
              name={todoItem.todoName}
              todos={todos}
              idx={idx}
              setTodos={setTodos}
              todoItem={todoItem}
            />)
      }
    </ul>
  );

};
export default TodoList;