/*
 * @Description: 简版状态管理
 * @Author: gaobo xu
 * @Date: 2019-08-12 16:49:38
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './reducer-demo';
import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
