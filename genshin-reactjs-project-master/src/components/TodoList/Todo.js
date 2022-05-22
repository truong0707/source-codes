import React, { useState } from 'react';
import TodoForm from './TodoForm';
//import TodoList from './TodoList';

import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ cong_viec, hoanThanh_CongViec, Xoa_CongViec, update_CongViec }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    update_CongViec(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };



  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return cong_viec.map((todo, index) => (
    <div className={todo.isComplete ? 'congviec-row complete' : 'congviec-row'} key={index}>
      <div key={todo.id} onClick={() => hoanThanh_CongViec(todo.id)}>
        {todo.text}
      </div>

      <div className='icons'>
        <RiCloseCircleLine onClick={() => Xoa_CongViec(todo.id)} className='Delete-icon' />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='Ddit-icon' />
      </div>
    </div>
  ));
};

export default Todo;
