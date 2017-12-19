/**
 * Created by za-lisanmei on 2017/9/14.
 */
import { combineReducers } from 'redux'
import todos from './todos'
const todoApp = combineReducers({
    todos : todos
})

export default todoApp
