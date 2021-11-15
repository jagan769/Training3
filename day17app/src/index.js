import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import StateData from './component/table';
import reportWebVitals from './reportWebVitals';
//import Clockapp from './component/clock';
//import Calculator from './component/temp';
//import Game from './component/game';
//import Game from './component/game1';
//import Component1 from './component/c';
import Appuseref from './component/useref';

ReactDOM.render(
  <React.StrictMode>
    <Appuseref />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();