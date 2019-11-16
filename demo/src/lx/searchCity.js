import React, { Component } from 'react'
import './searchCity.css'

import { withRouter } from "react-router-dom"

export class searchCity extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.location.state)
        this.sub = this.sub.bind(this)
        this.enterDetai = this.enterDetai.bind(this)
        this.state = {
            obj: {},
            inpCon: "",
            listObj: [],
            showO: false,
            showSearch: true,
            historyData: [],
            arrObj: [],
            showList:true,
        }
        this.back = this.back.bind(this)
    }
    componentWillMount() {
        this.setState({
            obj: this.props.location.state,
            
        })
        if(localStorage.asd){
            this.setState({
                historyData:JSON.parse(localStorage.getItem('asd'))
            })
        }
        // console.log(this.state.obj)
    }
    sub() {
        console.log(this.refs.inp.value)
        if (this.refs.inp.value == "") {
            alert("请输入要搜索的地址");
            return;
        }
        fetch("https://elm.cangdu.org/v1/pois?city_id=" +
            this.state.obj.id +
            "&keyword=" +
            this.refs.inp.value, { method: "get" }).then(res => {
                return res.json()
            }).then(data => {
                console.log(data)
                this.setState({
                    listObj: data,
                    // showO = true
                })
            }).catch(err => {
                console.log(err)
            })
        this.setState({
            showSearch: false
        })
    }
    back() {
        this.props.history.push("/cityQuery");
    }
    clear(){
        localStorage.clear();
       this.setState({historyData:[]})
    }
    enterDetai(v) {
        this.setState({
            showList:false
        })
        this.props.history.push({
            pathname: "/enter",
        })
        localStorage.address = JSON.stringify(v);
        this.state.historyData.push(v);
        console.log(this.state.historyData);
        localStorage.setItem("asd", JSON.stringify(this.state.historyData))
        // console.log(this.state.historyData);
    }
    render() {
        return (
            <div id="app">
                <div id="header">
                    <span className="el-icon-arrow-left lef" onClick={this.back}></span>
                    <span className="cen">{this.state.obj.name}</span>
                    <span className="rig" onClick={this.back}>切换城市</span>
                </div >
                <div id="inp">
                    <input ref="inp" type="text" placeholder="输入学校、商务楼、地址" />
                    <button onClick={this.sub}>提交</button>
                </div>
                <div id="searchHistroy" className={this.state.showSearch ? "searchHis_1" : "searchHis_2"}>搜索历史</div>
                <ul id="list" className={this.state.showList ? "searchHis_1" : "searchHis_2"}>
                    {
                        this.state.listObj.map((v, i) => {
                            return (
                                <li key={i} onClick={this.enterDetai.bind(this, v)}>
                                    <h4>{v.name}</h4>
                                    <p>{v.address}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul id="maskAddress" className={this.state.historyData.length>0 ? "searchHis_1" : "searchHis_2"}>
                    {
                        this.state.historyData.map((v,i)=>{
                            return (
                            <li key={i} onClick={this.enterDetai.bind(this, v)}>
                                <span>{v.name}</span>
                            </li>
                            )
                        })
                    }
                    <div onClick={this.clear.bind(this)}>清空搜索记录</div>
                </ul >
            </div >
        )
    }
}

export default withRouter(searchCity)
