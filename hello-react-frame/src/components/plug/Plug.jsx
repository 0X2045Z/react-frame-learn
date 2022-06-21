import React, { Component } from 'react'
import PlugCss from './plug.module.css' //这样写，避免样式产生冲突

export default class Plug extends Component {
  render() {
    return (
      <h2 className={PlugCss.title}>React 插件: VS Code ES7+ React/Redux/React-Native/JS snippets</h2>
    )
  }
}
