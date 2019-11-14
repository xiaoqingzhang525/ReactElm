// 路由入口组件
import React, { Component } from 'react'
import { Link, Route,Switch,Redirect } from "react-router-dom"
import "./enter.css"
// import { Button } from 'element-react';  //引入element-react
import 'element-theme-default';          //引入主题

// 引入组件
import Firsthome from "./zxq/Firsthome"



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
                <Switch>
                    <Redirect from="/enter" to="/enter/firsthome"/>>
                </Switch>
                  <Route path="/enter/firsthome" component={ Firsthome }/>    
                </header>
                <footer>
                    <Link to="/enter/firsthome" className="icons">
                        <span className="el-icon-star-off"></span>
                        <p>外卖</p>
                    </Link>
                    <Link to="/enter/firsthome" className="icons">
                        <span className="el-icon-search"></span>
                        <p>搜索</p>
                    </Link>
                    <Link to="/enter/firsthome"
                        className="icons">
                        <span className="el-icon-time"></span>
                        <p>订单</p>
                    </Link>
                    <Link to="/enter/firsthome"
                        className="icons">
                        <span className="el-icon-message"></span>
                        <p>我的</p>
                    </Link>
                </footer>

            </div>
        )
    }
}

export default Enter
