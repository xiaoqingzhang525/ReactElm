import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import "./home.css"

import Enter from './Enter'
import DetailShops from './zxq/DetailShops'
import Login from './zxq/Login'
import CityQuery from './lx/cityQuery'
import SearchCity from './lx/searchCity'

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
                    <Route path="/" component={CityQuery} exact/>
                    <Route path="/cityQuery" component={CityQuery}/>
                 <Route path="/searchCity" component={SearchCity}/>
                </Switch> 
            </div>
        )
    }
}

export default Home
