import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Todos from './component/usereducer';
import reportWebVitals from './reportWebVitals';
import Student from './component/s';
//import App from './component/todo-index' 
//import UseMemoApp from './component/usememo';
//import ToolbarApp from './component/custhook';

ReactDOM.render(
  <React.StrictMode>
    <Student />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
