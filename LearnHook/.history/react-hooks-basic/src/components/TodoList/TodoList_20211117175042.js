import React from 'react'
import { PropTypes } from 'prop-types';


// thằng cha
TodoList.propTypes ={

    todos: PropTypes.array,  // nghĩa là todo này là 1 loại array
    onTodoClick: PropTypes.func, // nghĩa là onTodoClick này là 1 function  
};

// khia báo giá trị mặt định khi thằng cha không truyền giá trị xuống
TodoList.defaultProps = {
    todos: [],  // rỗng 
    onTodoClick: null, // null
};

export default function TodoList(props) {

    const { todos, onTodoClick } = props;
    return (
        <div>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}
