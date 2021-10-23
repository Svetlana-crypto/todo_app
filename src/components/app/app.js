import React, {useEffect, useState} from 'react';

import Header from "../header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import AddTodo from "../add-todo";


import './style.css'

const App = () => {

  const [todos, setTodos] = useState([]);  //состояние,где хранятся все наши действия,задачи.
  const [input, setInput] = useState('');   // куда будем писать инпуты.
  const [filteredTodos, setFilteredTodos] = useState([]);   // отфильтрованные действия,важные,выполненые.
  const [status, setStatus] = useState('');   // состояние ,где проверяется статус.
  const [searchInputText, setSearchInputText] = useState('');  // для поисковика определенных задач.


  useEffect(() => {
    // useEffect - хук,для выполнения запросов на сервер.
    getItems();
    setStatus('all')
  }, []);

  useEffect(() => {
    saveItems();
    // должны перебрать btnStatus
    Array.from(document.getElementsByClassName('statusBtn')).map((btn) => {
      //  Array.from - преобразовываем в массив.
      if (btn.value === status) {        //  кек записать тернарным выражением?
        return btn.classList.add('active')
        //         classList.add - добавляем класс 'active'
      } else {
        return btn.classList.remove('active')
        //         classList.remove - данный класс удалять
      }
    })
  }, [status, todos, filteredTodos]);

  const saveItems = () => {
    //  saveItems - хранили данные в  localStorage.
    localStorage.setItem('todo', JSON.stringify(todos));
    //  setItem  - сохраняет по одному каждую задачу в localStorage и присваивает ключ "todo"
    //   JSON.stringify - пре образовывает в формат JSON.
    localStorage.setItem('btnStatus', status)
  };

  const getItems = () => {
    //   getItems - получать из localStorage.
    setTodos(JSON.parse(localStorage.getItem('todo')));
    //      JSON.parse - при образовывает  JSON.формат в обычный объект.
    setStatus(localStorage.getItem('btnStatus'))
  };

  const filterHandler = () => {
    if (status === 'active') {
      setFilteredTodos(todos.filter((item) => item.isActive))
    } else if (status === 'done') {
      setFilteredTodos(todos.filter((item) => !item.isActive))
    } else {
      setFilteredTodos(todos)
    }
  };


  useEffect(() => {
    filterHandler()
  }, [status, todos]);


  return (
    <div className="main">
      <div className='todo-container'>
        <Header todos={todos}/>
        <SearchPanel
          setStatus={setStatus}
          setSearchInputText={setSearchInputText}
        />
        {
          filteredTodos ? filteredTodos.length === 0 ?
            <div className="">Here should be Todo</div>
            : <TodoList
              todos={todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
              searchInputText={searchInputText}
            />
            : setFilteredTodos([])
        }
        <AddTodo
          todos={todos}
          setTodos={setTodos}
          input={input}
          setInput={setInput}
        />
      </div>
    </div>
  );
};

export default App;