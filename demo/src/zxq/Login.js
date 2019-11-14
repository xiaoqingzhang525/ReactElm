import React, { Component } from 'react'
import './login.css'
// const qs = require("querystring")

import { Switch } from 'element-react';
import 'element-theme-default';

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            yanzhnegma: "",
            types: "password",
            isT: false
        }
    }
    componentWillMount() {
        this.getYanzheng();
    }
    // 获取验证码的网络请求
    getYanzheng() {
        fetch("https://elm.cangdu.org/v1/captchas", {
            method: "POST",
            credentials:"include",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            this.setState({
                yanzhnegma: data.code
            })
        }).catch((err) => {
            console.log(err)
        })
    }
    // 登陆的网络请求
    loginBtn(){
        console.log(this.refs.code.value);
        let reg = /^1[0-9]{10}$/;
        if(reg.test(this.refs.user.value) && this.refs.pass.value != "" && this.refs.code.value !=""){
        fetch("https://elm.cangdu.org/v2/login",{
            method:"post",
            credentials:"include",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username:this.refs.user.value,
                password:this.refs.pass.value,   
                captcha_code:this.refs.code.value
            })
        }).then(res=>{
            return res.json();
        }).then(data=>{
            console.log(data);
        }).catch(err=>{
            console.log(err);
        })
        this.getYanzheng();
        }else{
            console.log("请输入正确的号码");
            this.getYanzheng();
        }
    }
    // 看不清换一张
    changeOne(){
        this.getYanzheng();
    }
    // 用户名的正则匹配
    userClick(e) {
        let reg = /^1[0-9]{10}$/;
        console.log(e.target);
        if (!reg.test(e.target.value)) {
            e.target.style.color = "red"
        } else {
            e.target.style.color = "green"
        }
    }
    // 点击返回
    back(){
        this.history.go(-1);
    }
    render() {
        return (
            <div>
                <div id="pwdTitle">
                    <span className="el-icon-arrow-left" onClick={this.back}></span>
                    <p className="pwdlogin">密码登录</p>
                </div>
                <div id="inpLogin">
                    <div>
                        <input placeholder="账号" type="text" onChange={this.userClick} ref="user"/>
                    </div>
                    <div>
                        <input placeholder="密码" type={this.state.types} id="passwordCss" ref="pass"/>
                        <span id="switch">
                            <Switch
                                value={this.state.isT}
                                onChange={(value) => {
                                    if (this.state.types == "text") {
                                        this.setState({
                                            types: "password",
                                            isT: false
                                        })
                                    } else {
                                        this.setState({
                                            types: "text",
                                            isT: true
                                        })
                                    }
                                }}
                            >
                            </Switch>
                        </span>
                    </div>
                    <div>
                        <input placeholder="验证码" type="text"  ref="code"/>
                        <img src={this.state.yanzhnegma} />
                        <div id="imgRight">
                            <p className="vagueBtn">看不清</p>
                            <p className="vagueBtn changeImg" onClick={this.changeOne.bind(this)}>换一张</p>
                        </div>
                    </div>

                </div>
                <div id="btnLogin">
                    <p className="hint">温馨提示：未注册过的账号，登录时将自动注册</p>
                    <p className="hint">注册过的用户可凭账号密码登录</p>
                    <button className="loginBtn" onClick={this.loginBtn.bind(this)}>登录</button>
                </div>
            </div>
        )
    }
}

export default Login
