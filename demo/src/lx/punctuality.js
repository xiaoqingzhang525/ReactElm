import React, { Component } from 'react'
import './punctuality.css'

export class punctuality extends Component {
    constructor(props) {
        super(props)

        this.state = {
            obj: this.props.location.state,
            classArr: [],
            objs: "",
            b: "",
            showClass: false,
            showShop: false,
            shops: [],
            count: 0,
            arrSmallDetail: [],
            valueId: "",
            delivery_mode: "",
            arr: [],
        }
    }
    componentWillMount() {

    }

    render() {
        return (
            <div>
                <header>
                    <span class="el-icon-arrow-left" onClick="back()"></span>
                    <span>甜品饮料</span>
                </header>
                <ul id="con">
                    <li onClick="reverse()">
                        <span class="ones">甜品饮料</span>
                        <span class="el-icon-caret-bottom one"></span>
                    </li>
                    <span class="ver1"></span>
                    <li onClick="reverse2()">
                        <span class="twos">排序</span>
                        <span class="el-icon-caret-bottom two"></span>
                    </li>
                    <span class="ver2"></span>
                    <li onClick="filter()">
                        <span>筛选</span>
                        <span class="el-icon-caret-bottom"></span>
                    </li>
                </ul>
            </div >
        )
    }
}

export default punctuality
