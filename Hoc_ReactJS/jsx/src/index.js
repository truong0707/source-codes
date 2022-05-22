import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 1. lồng biểu thức 
// khai báo  biến jsx
const element = <h1>Hello, world!</h1>;

ReactDOM.render(

  //lồng biến jsx đó vào
  element,
  document.getElementById('root')
);



// 2. thêm biểu thức vào
// khai báo biến name
const name = 'Trường';
// show nội dụng động "name" bên trong dấu {}
const element = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);



// vd:
const name = 'Trường';
const user = {
  firtName: 'Miss',
  lastName: 'Thanh',

}
const element = <h1>Hello, {user.firtName}</h1>;
// const element = <h1>Hello, {user.firtName + ' ' + user.lastName}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);



// vd
const name = 'Trường';
const user = {
  firtName: 'Miss',
  lastName: 'Thanh',

}
const element = <h1>Hello, {4 + 4}</h1>;
// const element = <h1>Hello, {user.firtName + ' ' + user.lastName}</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);

reportWebVitals();
