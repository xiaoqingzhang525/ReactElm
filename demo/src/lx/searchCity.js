import React, { Component } from 'react'
import './searchCity.css'

export class searchCity extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.location.state)
        this.state = {
            obj: {},
            inpCon: "",
            listObj: {},
            showO: false,
            arrKey: [],
            arrObj: [],
        }
    }
    componentWillMount() {
        this.setState({
            obj: this.props.location.state
        })

    }
    sub() {
        if (this.inpCon == "") {
            alert("请输入要搜索的地址");
            return;
        }
        fetch("https://elm.cangdu.org/v1/pois?city_id=" +
            this.obj.id +
            "&keyword=" +
            this.inpCon,{method:"get"}).then(res =>{
                return res.json()
            }).then(data=>{
                console.log(data)
                this.setState({
                    listObj:data,
                    // showO = true
                })
            }).catch(err=>{
                console.log(err)
            })
    }
    render() {
        return (
            <div id="app">
                <div id="header">
                    <span className="el-icon-arrow-left lef" onClick="back()"></span>
                    <span className="cen">{this.state.obj.name}</span>
                    <span className="rig" onClick="back()">切换城市</span>
                </div >
                <div id="inp">
                    <input type="text" placeholder="输入学校、商务楼、地址" v-model="inpCon" />
                    <button onClick="sub()">提交</button>
                </div>
                <div id="searchHistroy">搜索历史</div>
                <ul id="list">
                    
                    {/* <li v-for="(v,i) in listObj" : key="i" @click="enterDetai(v)">
        <h4>{{ v.name }}</h4>
                    <p>{{ v.address }}</p>
      </li> */}
                </ul>
                <ul id="maskAddress">
                    {/* <li v-for="(v,i) in arrObj" : key="i" @click="enterDetai(v)">
        <span>{{ v.name }}</span>
      </li> */}
                    {/* <div onClick="clear()">清空搜索记录</div> */}
                </ul >
            </div >
        )
    }
}

export default searchCity
