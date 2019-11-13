// 路由入口组件
import React, { Component } from 'react'
import {Link,Route} from "react-router-dom"
import "./enter.css"


export class Enter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    render() {
        return (
            <div>
                <header>
                <Route/>
                </header>
                <footer>
                <Link to=""></Link>
                </footer>
            </div>
        )
    }
}

export default Enter
