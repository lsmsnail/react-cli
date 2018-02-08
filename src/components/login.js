/**
 * Created by lisanmei on 2017/9/14.
 */
import React, { Component } from 'react';
import {addTodo} from '../actions'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import '../scss/login.scss'
class Login extends Component{
    constructor(props){
        super(props);
    }
    clickTest(){
        this.props.dispatch(addTodo('你好'))
    }
    render(){
        let {todos} = this.props;
        console.log('login', this.props);
        return (
            <div>
                <h1>{todos.text}</h1>
                <button onClick={()=>this.clickTest()}>click</button>
                <div className="image">123</div>
            </div>
        )
    }
}
let mapStateToProps=(state)=>{
    const {todos} = state;
    return {
        todos
    };
};

let mapDispatchToProps=(dispatch)=>{
    return {
        ACTIONS: bindActionCreators(addTodo,dispatch)
    };
};

Login = connect(mapStateToProps)(Login);
export default Login
