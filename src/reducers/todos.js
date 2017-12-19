/**
 * Created by za-lisanmei on 2017/9/14.
 */
import actions from '../actions/actionTypes'
let initState = {text: 'init'};
const todos = (state = initState, action)=>{
    switch(action.type){
        case actions.ADD_TODO:
            return {text: action.text};
        default:
            return state
    }
}
export default todos
