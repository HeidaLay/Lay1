import {combineReducers} from 'redux'
let count=(state=0,action)=>{
    console.log(state,action);
    switch(action.type){
        case 'ADD':
        return state +action.result
        default:
                return state
        case 'MINUS':
        return state-action.result
        
    }
}
let CET6=(state=0,action)=>{
    switch(action.type){
        case'CET6':
        return state+action.grade
        default:
        return state
    }
}
export default combineReducers({
    count,CET6
});