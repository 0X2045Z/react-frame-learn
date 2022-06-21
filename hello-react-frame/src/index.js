// 引入react核心库
import React from 'react'
// 引入reactDom
import ReactDOM from 'react-dom'
// 引入app文件
import App from './App';

// 渲染组建到页面
ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ,document.getElementById('root'));