import React, { Component } from 'react'
import "./detailShops.css"
import {withRouter} from "react-router-dom"

export class DetailShops extends Component {
    constructor(props) {
        super(props)

        this.state = {
            obj: {}
        }
        console.log(this.props.location.state);
        this.state.obj =this.props.location.state 
    }
    render() {
        return (
            <div className="detail">
                <header>
                    <div id="bg" style={{'backgroundImage':'url(//elm.cangdu.org/img/'+this.state.obj.image_path,'backgroundSize':'cover','filter':'blur(9px)'}}>
                    <div id="mengban"></div>
                    </div>
                    {/* 头部内容 */}
                    <div id="headers">
                    <span class="el-icon-arrow-left" ></span>
                    <img src={'//elm.cangdu.org/img/'+this.state.obj.image_path}/>
                    </div>
               </header> 
            </div >
        )
    }
}

export default withRouter(DetailShops)
