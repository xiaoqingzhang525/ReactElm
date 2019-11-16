import React, { Component } from 'react'
import "./firsthome.css"
import Swiper from "swiper"
import "../../node_modules/swiper/css/swiper.min.css"
import { Rate } from 'element-react';
import 'element-theme-default';
import {withRouter} from "react-router-dom"

  
export class Firsthome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: {},
            claasifyArr: [],
            shops: [],
            obj:JSON.parse(localStorage.address),
        }
    };
    componentWillMount() {
        this.getLocationCity();
        this.getCity();
        this.getShops();
    };
    getCity() {//获取定位城市
        fetch("https://elm.cangdu.org/v1/cities?type=guess", { method: "get" }).then((res) => {
            return res.json();
        }).then((data) => {
            this.setState({
                city: data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    getLocationCity() {//获取食品分类
        fetch("https://elm.cangdu.org/v2/index_entry", { method: "get" }).then((res) => {
            return res.json();
        }).then((data) => {
            for (var i = 0; i < data.length / 8; i++) {
                let subArr = data.slice(i * 8, (i + 1) * 8);
                this.setState((pre) => {
                    return { claasifyArr: [...pre.claasifyArr, subArr] }
                })
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    getShops() {//获取商铺列表
        fetch("https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762", {
            method: "get"
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            this.setState({
                shops: data
            })
            console.log(this.state.shops)
        }).catch((err) => {
            console.log(err)
        })
    }
    // 点击进入商铺详情页
    clickShops(v) {
        localStorage.shops = JSON.stringify(v);
        console.log(v);
        this.props.history.push({
            pathname:"/detailShops",
            state:v,
        })
    }
    componentDidUpdate() {
        var mySwiper = new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    // 点击城市切换
    chengeCity(){
        this.props.history.push("/cityQuery")
    }
    render() {
        return (
            <div>
                {/* 头部 */}
                <div id="header">
                    <span className="el-icon-search back"></span>
                    <span className="address" onClick={this.chengeCity}><i className="iconfont icon-rila"></i>{this.state.obj.address}</span>
                    <span  onClick={this.login}></span>
                    <i className="icon icon-rila"></i>
                </div>
                {/* 轮播图部分 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.claasifyArr.map((v, i) => {
                                return (<ul className="swiper-slide" key={i}>
                                    {
                                        v.map((val, ind) => {
                                            return (
                                                <li key={ind}>
                                                    <img src={'https://fuss10.elemecdn.com' + val.image_url} />
                                                    <p>{val.title}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>)
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {/* 商铺列表 */}
                <div id="listShops">
                    <p><span class="el-icon-date"></span>附近商家 </p>
                    {
                        this.state.shops.map((v, i) => {
                            return (<li key={i} id="singleLi" onClick={this.clickShops.bind(this,v)}>
                                <img src={'//elm.cangdu.org/img/' + v.image_path} />
                                <div>
                                    <span className="brand">品牌</span>
                                    <h4 className="title">{v.name}</h4>
                                    <span className="star">
                                        <Rate disabled={true} value={v.rating} showText={true} />
                                    </span>
                                    <span className="num">月售{v.recent_order_num}单</span>
                                    <span className="sendMsg">￥{v.float_minimum_order_amount}起送/{v.piecewise_agent_fee.tips}</span>
                                    <span class="bzp">
                                        {
                                            v.supports.map((val,ind)=>{
                                                return (<span key={ind}>{ val.icon_name }</span>)
                                            })
                                        }
                                    </span>
                                <span className="onTime">
                                    <span>{v.delivery_mode.text}</span>
                                    <span>{v.supports[1].name}</span>
                                    <span className="km">{v.distance}/{v.order_lead_time}</span>
                                </span>
                                </div>
                            </li>)
            })
        }
                </div>
            </div >
        )
    }
}

export default withRouter(Firsthome)
