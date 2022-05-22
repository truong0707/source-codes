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
    
  }


  return (
    <div className="App">
      {/*   <ColorBox/> */}
      <TodoList todos={todoList} onTodoClick={}/>
    </div>
  );
}

export default App;
