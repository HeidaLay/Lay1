import React, { Component } from 'react';
import store from './store';
import {add,minus} from './action';
import {connect} from 'react-redux';
class App extends Component {
  constructor(params){
    super(params);
    this.add=this.add.bind(this);
  }
  add(){
    console.log('23333');
    store.dispatch(add(5));
  }
  render() {
    return (
      <div className="App">
         <p>hahaha哈哈</p>
         {this.props.result}
         <button onClick={this.add}>添加</button>
         <button onClick={()=>{
           store.dispatch(add(5))
         }}></button>
         <br/>
        <button onClick={store.dispatch(minus(3))}>减少</button>
        {/* <h1>小蒋同学的六级成绩:</h1>
        <button onClick={store.dispatch(CET6(30))}></button> */}
      </div>
    );
  }
}
let getKeyFromStore=(state)=>{
    return {
       result:state.count,
      //  grade:state.CET6
    }
}
export default  connect(getKeyFromStore)(App)