import {createStore} from 'redux';
import reducer from './reducer'
import { CET6 } from './action';
// reducer  
let initialState = {
    count:10,
    // CET6:401
}
// createStore创建store 第一个参数reducer 第二个参数初始state
let store = createStore(
reducer,initialState);

export default store;