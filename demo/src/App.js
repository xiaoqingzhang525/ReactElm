import React from 'react';
import './App.css';
import "./assets/reset.css"
import "./assets/resize"   


// 引入路由
import {BrowserRouter} from "react-router-dom"
// home是最大的路由出口
import Home from "./Home"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
