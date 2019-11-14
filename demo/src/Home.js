import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import "./home.css"
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
                 <Route path="/" component={CityQuery} exact/>
                 <Route path="/searchCity" component={SearchCity}/>
            </Switch>   
            </div>
        )
    }
}

export default Home
