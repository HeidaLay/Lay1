import React, { Component } from 'react'

export default class B extends Component {
    
  render() {
      let {match}=this.props;
    return (
      <div>
          Module B
          <br/>
          {/* {this.props.match.params.Club2} */}
          {match.params.Club2}
      </div>
    )
  }
}
