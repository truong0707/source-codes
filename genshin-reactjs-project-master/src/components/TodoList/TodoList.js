import React, { useState } from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [cong_viec, setcong_viec] = useState([]);

  const Add_Todo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newcong_viec = [todo, ...cong_viec];

    setcong_viec(newcong_viec);
    console.log(...cong_viec);
  };

  const update_CongViec = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setcong_viec(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const Xoa_CongViec = id => {
    const removedArr = [...cong_viec].filter(todo => todo.id !== id);

    setcong_viec(removedArr);
  };

  const hoanThanh_CongViec = id => {
    let updatedcong_viec = cong_viec.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setcong_viec(updatedcong_viec);
  };

  return (
    <>
      <h1 className="h1-class">Danh sách kế hoạch của tuần này!</h1>
      <TodoForm onSubmit={Add_Todo} />
      <Todo
        cong_viec={cong_viec}
        hoanThanh_CongViec={hoanThanh_CongViec}
        Xoa_CongViec={Xoa_CongViec}
        update_CongViec={update_CongViec} />
    </>
  );
}

export default TodoList;
