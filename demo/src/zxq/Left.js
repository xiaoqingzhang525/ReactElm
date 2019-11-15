import React, { Component } from 'react'
import "./left.css"
import { Consumer } from "./DetailShops";//引入父组件的Consumer容器
import $ from 'jquery'    //使用jQuery


export class Left extends Component {
    constructor(props) {
        super(props)

        this.state = {
            obj: JSON.parse(localStorage.shops),
            classfityL: [],
            speciMsg: [],
            count: 0
        }
    }
    componentWillMount() {
        this.getClassfityL();
    }
    getClassfityL() {
        fetch("https://elm.cangdu.org/shopping/v2/menu?restaurant_id=1", {
            method: "get"
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data);
            this.setState({
                classfityL: data
            })
        }).catch(err => {
            console.log(err)
        })
    }
    // 左边li的点击事件
    clickLi(i) {
        $(".singleli").css("background", "rgb(243,243,243)")
        $(".singleli").eq(i).css("background", "white");
        $(".silder").css("display", "none");
        $(".silder").eq(i).css("display", "block");
    }
    // 点击选规格这三个字
    clickChoose(value, e) {
        this.setState({
            speciMsg: value
        })
    }
    render() {
        return (
            <div>
                <Consumer>
                    {(obj) =>
                        <div id="classify">
                            <div className="classifyL" >
                                {
                                    this.state.classfityL.map((v, i) => {
                                        return (<li key={i} onClick={this.clickLi.bind(this, i)} className="singleli">
                                            {v.icon_url ? v(<img src={'https://fuss10.elemecdn.com/' + v.icon_url} />) : null}
                                            <span>{v.name}</span>
                                            {v.type - 1 > 0 ? v(<span className="pointRed">{v.type - 1}</span>) : null}
                                            <span className="silder"></span>
                                        </li>)
                                    })
                                }
                            </div>
                            <div id="classifyR">
                                {
                                    this.state.classfityL.map((v, i) => {
                                        return (<ul key={i}>
                                            <h2>
                                                <p>{v.name}</p>
                                                <span>{v.description}</span>
                                                <span>...</span>
                                                <span>
                                                    <small></small>
                                                    {v.description}
                                                </span>
                                            </h2>
                                            {
                                                v.foods.map((value, ind) => {
                                                    return (<li>
                                                        <img src={"http://elm.cangdu.org/img/" + value.image_path} />
                                                        <div>
                                                            <h5>{value.name}</h5>
                                                            <span>{value.description}</span>
                                                            <span>月售{value.month_sales}份 好评率{value.rating / 5 * 100}%</span>
                                                            {value.activity ? (<span>{value.activity.image_text}</span>) : null}
                                                            <p className="prices">
                                                                <span>￥{value.specfoods[0].price}元起</span>
                                                                {value.specifications.length > 0
                                                                    ?
                                                                    (<small className="btn1">+</small>)
                                                                    :
                                                                    (<small className="isT" onClick={this.clickChoose.bind(this, value)}>选规格</small>)
                                                                }
                                                                {this.state.count > 0 ? (<div><small className="count"></small><small className="btn2">-</small></div>) : null}
                                                            </p>
                                                        </div>
                                                    </li>)
                                                })
                                            }
                                        </ul>)
                                    })
                                }
                            </div>
                            <div id="footers">
                                <p id="zongshu" v-if="count">{this.state.count}</p>
                                <span class="el-icon-document car"></span>
                            <span>
                                <small>共{this.state.count}元</small>
                                <small>配送费￥{this.state.obj.float_delivery_fee}</small>
                            </span>
                            <span>还差￥起送</span>
          </div>
            </div>
                    }
                </Consumer>

            </div >
        )
    }
}

export default Left
