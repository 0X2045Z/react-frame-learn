// 创建外壳组建
import React,{Component} from 'react'

import Hello from './components/hello/Hello'
import Plug from './components/plug/Plug'

// 创建并暴露App组建
export default class App extends Component{
    render() {
        return (
            <div>
               <Hello/>
               <Plug/>
            </div>
        )
    }
}