import React, { Component } from 'react'
import "./detailShops.css"
import { withRouter,Route,Switch,Redirect } from "react-router-dom"
// 引入路由子组件
import Left from "./Left"
import Right from './Right'
// 公共数据传递给子组件
export const {Provider,Consumer} = React.createContext("");
export class DetailShops extends Component {
    constructor(props) {
        super(props)
        this.state = {
            obj:JSON.parse( localStorage.shops)
        }
    }
    // 商品和评价的点击事件
    clickShops(e){
        if(e.target.innerHTML === "商品"){
            e.target.style.color="#3190e8";
            this.refs.silde.style.left="0.65rem";
            this.refs.comments.style.color = "#666666";
            this.props.history.push("/detailShops/left");
        }else{
            e.target.style.color="#3190e8";
            this.refs.silde.style.left="2.5rem";
            this.refs.shopes.style.color = "#666666";
            this.props.history.push("/detailShops/right");
        }
    }
    back(){
        this.props.history.push("/enter")
    }
    render() {
        let obj = this.state.obj;
        return (
            <div className="detail">
                <Provider value={obj}>
                <header>
                    <div id="bg" style={{ 'backgroundImage': 'url(//elm.cangdu.org/img/' + this.state.obj.image_path, 'backgroundSize': 'cover', 'filter': 'blur(9px)' }}>
                        <div id="mengban"></div>
                    </div>
                    {/* 头部内容 */}
                    <div id="headers">
                        <span className="el-icon-arrow-left" onClick={this.back.bind(this)}></span>
                        <img src={'//elm.cangdu.org/img/' + this.state.obj.image_path} />
                        <div>
                            <h4>{this.state.obj.name}</h4>
                            <span className="shopSend">商家配送/分钟送达/配送费￥{this.state.obj.float_delivery_fee}</span>
                            <span className="notice">{this.state.obj.promotion_info}</span>
                            <span className="el-icon-arrow-right"></span>
                        </div>
                        {this.state.obj.activities.length > 0 ? (<span className="onSale"   >
                            <small>{this.state.obj.activities[0].icon_name}</small>
                            <small
                            >{this.state.obj.activities[0].description}(APP专享)</small>
                        </span>) : null}
                    </div>
                </header>
                <ul id="SorP">
                    <li onClick={this.clickShops.bind(this)} ref="shopes">商品</li>
                    <li onClick={this.clickShops.bind(this)} ref="comments">评价</li>
                    <span ref="silde"></span>
                    </ul>
                    <div id="routers">
                   <Switch>
                       <Redirect from="/detailShops" to="/detailShops/left" />
                   </Switch>
                        <Route path="/detailShops/left" component={Left} />
                        <Route path="/detailShops/right" component={Right} />
                    </div>
                </Provider>
            </div >
        )
    }
}

export default withRouter(DetailShops)
