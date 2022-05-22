import React from 'react'
import './TodoList.css';
import TodoList from './TodoList';
import Header from '../HomePage/Header/Header'
import Footer from '../HomePage/Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop';

function TodoShow() {
    return (
        <div className="BackGround">
            <Header/>
            <div className="bg" alt="hi">
                <img className="BBtest" src="images/todo-images/background.jpg" alt="todolist" />
            </div>
            <div className='List-congviec'>      
                <TodoList />
            </div>
            <Footer/>
            <ScrollToTop/>
        </div>
    )
}

export default TodoShow
