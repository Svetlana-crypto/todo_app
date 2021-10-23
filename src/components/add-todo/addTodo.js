import React from 'react';
import './style.css'
const AddTodo = ({todos, setTodos, input, setInput}) => {
  //        ({todos, setTodos, input, setInput})- передаем стейты
  const formHandler = (e) => {
    e. preventDefault();
    // preventDefault -  отключить стандартное поведение браузера.
    setInput(''); // хранить всё в строке.
    setTodos([...todos, {   //  каждую запись сохранять в массиве   [...todos] - спред оператор,накопитель.
      todoName: input,  // храниться то что мы написали в инпут.
      isActive: true,
      isImportant: false,
      id: Math.floor(1000 * Math.random())
      // Math.floor - округление вниз,до ближайшего меньшего числа.
    }])
  };

  const inputHandler =(e) => {
    setInput(e.target.value)
    // setInput - обновляет и хранит в инпуте, обращаемся к инпуту при помощи (e.target)  объекта событий
    // и обратиться к его значению с помощью  value.
  };


  return (
    <form className='add-todo mt-3' onSubmit={formHandler}>
      <input type="text"
             onChange={inputHandler}
             value={input}
             placeholder='What needs to be done?'
             className='add-input'
             required
         //  required - обязательно заполнить ячейку,иначе процесс не пойдет дальше.
      />
      <button type='submit' className='btn btn-outline-success ' > Add Todo</button>
    </form>
  );
};

export default AddTodo;