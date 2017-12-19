/**
 * Created by lisanmei on 2017/9/14.
 */
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import asyncComponent from './AsyncComponent'
const App = asyncComponent(() => import('./components/app'));
const Login = asyncComponent(() => import('./components/login'));
// import App from './components/app';
// import Login from './components/login';
import reducer from './reducers'
import history from 'history'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import {addTodo} from './actions'

const store = createStore(reducer);

render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)
