/**
 * Created by lisanmei on 2017/9/14.
 */
import actions from './actionTypes'
export const addTodo = (text)=>{
    return {
        type: actions.ADD_TODO,
        text
    }
}
