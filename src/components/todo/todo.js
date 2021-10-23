import React from 'react';

const Todo = ({name, todoItem, todos, setTodos, idx}) => {

  const activeHandler =() => {
    //  ф-ия отвечает за Активность,галочка.
    setTodos(todos.map((todo) =>{
      return todo.id === todoItem.id ?
        // тернарное выражение   1 операнд - условие в конце знак ?
        //                       2 операнд  -выражение которое выполняется,если истина ,то :
        //                       3 операнд - выражение которое выполняется если ложь
        {...todo, isActive: !todoItem.isActive} : todo
    }));
    Array.from(document.getElementsByClassName('todo-name'))
      .map((name, nameIdx) =>{
     if(nameIdx === idx){
       name.classList.toggle('done')
         //          toggle - переключить
     }
    });
    Array.from(document.getElementsByClassName('doneBtn'))
      .map((btn, btnIdx) =>{
      if(btnIdx === idx){
        btn.classList.toggle('active')
      }
    });
  };

  //  ф-ия отвечает за Важность,звездочка.
  const importantHandler =() => {
    setTodos(todos.map((todo) =>{
      return todo.id === todoItem.id ?
        {...todo, isImportant: !todoItem.isImportant} : todo
    }));
    Array.from(document.getElementsByClassName('todo-name'))
      .map((name, nameIdx) =>{
        if(nameIdx === idx){
          name.classList.toggle('star')
        }
      });
    Array.from(document.getElementsByClassName('starBtn'))
      .map((btn, btnIdx) =>{
        if(btnIdx === idx){
          btn.classList.toggle('active')
        }
      });
  };

  //  ф- ия отправить в корзину.
  const deleteHandler = () => {
    setTodos(todos.filter((todo) =>{
      return todo.id !==todoItem.id
    }))
  };

  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <span
      className={`todo-name ${!todoItem.isActive ? 'done' : ''} ${todoItem.isImportant ? 'star' : ''}`}
      >
        {name}
      </span>
      <div>
        <button type='button'
          //  ф-ия отвечает за Активность,галочка.
                onClick={activeHandler}
                className={`btn btn-outline-success doneBtn ${!todoItem.isActive ? 'active' : ''}`}
        > <i className="fas fa-check"> </i> </button>
       <button type='button' style={{'margin-left' : '5px'}}
          //  ф-ия отвечает за Важность,звездочка.
                onClick={importantHandler}
                className={`btn btn-outline-warning startBtn ${!todoItem.isImportant ? 'active' : ''}`}
       ><i className="fas fa-star"> </i></button>
        <button type='button'  style={{'margin-left' : '5px'}}
          //  ф- ия отправить в корзину.
                  onClick={deleteHandler}
                  className='btn btn-outline-danger '> <i className="fas fa-trash"> </i></button>
      </div>
    </li>
  );
};

export default Todo;