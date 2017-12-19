/**
 * Created by za-lisanmei on 2017/9/14.
 */
import React, { Component } from 'react';
import '../scss/app.scss'
class App extends Component{
    constructor(props){
        super(props);
    }
    clickTest(){
        console.log('clickTest');
    }
    render(){
        return (
            <div>
                <div onClick={()=>this.clickTest()}>click11</div>
                <img src={require('../images/Lighthouse.jpg')} width="200" />
            </div>
        )
    }
}

export default App
