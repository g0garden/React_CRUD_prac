import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './shared/App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/configStore";
import { Provider } from "react-redux";


ReactDOM.render(
  //BrowserRouter -> 웹브라우저가 가지고 있는 주소관련정보를 props로 넘겨줌
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
