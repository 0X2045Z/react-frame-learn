import React,{Component} from 'react'
import hello from './hello.module.css' //这样写，避免样式产生冲突

export default class Hello extends Component{
    render(){
        return <h2 className={hello.title}>Hello React!</h2>
    }
}