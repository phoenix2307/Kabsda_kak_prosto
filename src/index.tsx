import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppMemo} from "./memo/AppMemo";
import {Clock} from "./components/Clock";

ReactDOM.render(
    // <AppMemo/>,
    // <App />,
    <Clock/>,
  document.getElementById('root')
);

reportWebVitals();





