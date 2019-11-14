import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import "./home.css"

import Enter from './Enter'
import DetailShops from './zxq/DetailShops'
import Login from './zxq/Login'

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/enter" component={Enter} />
                    <Route path="/detailShops" component={DetailShops} />
                </Switch>
            </div>
        )
    }
}

export default Home
