import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import "./home.css"


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
                 <Route/>
            </Switch>   
            </div>
        )
    }
}

export default Home
