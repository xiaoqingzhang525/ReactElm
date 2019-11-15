import React, { Component } from 'react'
import './cityQuery.css'
import {withRouter} from "react-router-dom"


export class cityQuery extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.enter = this.enter.bind(this)
        this.state = {
            guess: "",
            hot: [],
            oGroups: {},
            showG: false,
            showH: false,
            showGr: false,
            // 搜索城市
            // searchC: "",
        }
    }
    //登录跳转
    login() {
        this.props.history.push("/login");
        console.log("登录")
    }
    componentWillMount() {
        // 热门城市
        fetch("https://elm.cangdu.org/v1/cities?type=hot", { method: "get" }).then(res => {
            return res.json();
        }).then(data => {
            // console.log(data)
            this.setState({
                hot: data,
            })
            // console.log(this.state.hot)
        }).catch(err => {
            console.log(err)
        })

        // 所有城市
        fetch("https://elm.cangdu.org/v1/cities?type=group", { method: "get" }).then(res => {
            return res.json();
        }).then(data => {
            // console.log(data)
            this.setState({
                oGroups: data,
            })
            let arr = [];
            let obj = {};
            for (const key in data) {
                arr.push(key);
            };
            arr = arr.sort();
            for (const i in arr) {
                obj[arr[i]] = data[arr[i]];
            }
            this.setState({
                oGroups: obj
            })
            // console.log(obj)
            // console.log(this.state.oGroups)
        }).catch(err => {
            console.log(err)
        })
    }
    // 数据请求
    enter(a) {
        this.props.history.push({
            pathname: "/searchCity",
            state: a
        })
    }
    render() {
        return (
            <div id="app">
                <div id="header">
                    <span>ele.me</span>
                    <span onClick={this.login}>登录|注册</span>
                </div>
                {/* 定位城市 */}
                <ul id="guess">
                    <li>
                        <span className="lef1">当前定位城市：</span>
                        <span className="rig1">定位不准,请在城市列表中选择</span>
                    </li>
                    <li onClick={this.enter.bind(this, this.state.guess)}>
                        <span className="lef2">
                            <span>{this.state.guess.name}
                                {/*v-show="showG"  {{ guess.name }} */}
                            </span>
                        </span>
                        <span className="el-icon-arrow-right rig2"></span>
                    </li>
                </ul>
                {/* 热门城市 */}
                <div id="hot">
                    <p>热门城市</p>
                    <ul>
                        {
                            this.state.hot.map((v, i) => {
                                return (
                                    <li key={i} onClick={this.enter.bind(this, v)}>{v.name}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                {/* 所有城市 */}
                <div className="allGroups">
                    {
                        Object.keys(this.state.oGroups).map((k, y) => {
                            return (
                                <div key={y}>
                                    <p>{k}</p>
                                    <ul className="allGroup">
                                        {
                                            this.state.oGroups[k].map((keyss, g) => {
                                                return (
                                                    <li key={g} onClick={this.enter.bind(this, keyss)}>
                                                        {keyss.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>

            </div >
        )
    }
}

export default withRouter(cityQuery)
