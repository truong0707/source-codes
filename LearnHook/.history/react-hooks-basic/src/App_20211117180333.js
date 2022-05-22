import { useState } from 'react';
import './App.css';
/* import ColorBox from './components/ColorBox'; */
import TodoList from './components/TodoList/TodoList';

function App() {

  // tạo 1 mảng
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'truong1' },
    { id: 2, title: 'truong2' },
    { id: 3, title: 'truong3' },
  ]);

  function handleTodoClick(todo) {
    console.log(todo)
    const index = todoList.findIndex(x => x.id == todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    
  }


  return (
    <div className="App">
      {/*   <ColorBox/> */}
      <TodoList todos={todoList} onTodoClick={handleTodoClick}/>
    </div>
  );
}

export default App;
