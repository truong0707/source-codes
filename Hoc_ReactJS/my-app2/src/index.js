import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// function Welcome(props) {
//     //Other code
//     return <h1>Hello, {props.name}</h1>;
// }

// export default Welcome;

export default class Welcome extends React.Component {
  render() {
      return <h1>Hello, {this.props.name}</h1>;
  }
}