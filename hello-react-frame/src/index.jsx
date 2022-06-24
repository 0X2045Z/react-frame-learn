// 引入react核心库
import React from 'react'
// 引入reactDom
import ReactDOM from 'react-dom/client';
// 引入app文件
import App from './App';

// 渲染组建到页面
const root = ReactDOM.createRoot(document.getElementById('root'));

//  <React.StrictMode> -- 用于react代码检查
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
