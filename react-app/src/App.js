import React, { Component } from 'react';
import Axios from 'axios'
class App extends Component {
  constructor(params) {
    super(params);
    this.state = {
        isWarn:true,
        list:[],
        isShow:false
    }
}
  render() {
    return (
      <div className="App">
       哈哈哈
       <ul>
                {
                    this.state.list.map((obj,index)=>{
                        return (
                            <li>
                                <p>{obj.name}</p>
                                <p>{obj.date}</p>
                                <img src={obj.image}/>
                            </li>
                        )
                    })
                }
            </ul>
      </div>
    );
  }
  componentDidMount(){
    Axios.get('http://www.xxbbtianxiadiyi.com').then((result)=>{
        console.log(result);
        this.setState({
          list:result.data.list
      });
    }).catch()
  }
}

export default App;
