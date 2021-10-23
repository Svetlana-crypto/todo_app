import React from 'react';
import './style.css'

const SearchPanel = ({setStatus, setSearchInputText}) => {
  const all = document.getElementById('all');
  const active = document.getElementById('active');
  const done = document.getElementById('done');

  const statusHandler = (e) => {
    const addActiveClass = (mainEl, el2, el3) => {
      //  addActiveClass - чтобы работало переключение кнопок.
      mainEl.addEventListener('click', () => {
        //   addEventListener - обработчик события.
        if (!mainEl.className.includes('active')) {
          //                  includes  - содержит
          mainEl.classList.add('active');
          //    add  -  добавляем класс
          el2.classList.remove('active');
          //       remove  - удаляем класс
          el3.classList.remove('active');
        }
      })
    };
    addActiveClass(all, active, done);
    addActiveClass(active, all, done);
    addActiveClass(done,  active, all);
    setStatus(e.target.value)
  };

  const searchInputHandler = (e) => {
    //  searchInputHandler - создать поисковик при помощи функции .
    setSearchInputText(e.target.value)
      //      value - записывает значение введенное в инпут.
  }


  return (
    <div className='search-panel mb-3'>
      <input type="text"
             onChange={searchInputHandler}
             placeholder="search todo"
             className='search-input'/>
      <div className='btn-group'>
        <button type="button" id='all' className='btn btn-outline-info statusBtn' value='all'
                onClick={statusHandler}>All
        </button>
        <button type="button" id='active' className='btn btn-outline-info statusBtn' value='active'
                onClick={statusHandler}>Active
        </button>
        <button type="button" id='done' className='btn btn-outline-info statusBtn' value='done'
                onClick={statusHandler}>Done
        </button>
      </div>
    </div>
  );
};

export default SearchPanel;