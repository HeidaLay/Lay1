import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    let {match}=this.props;
    return (
      <div>
          Module Home
          <br/>
          {match.params.index}
      </div>
    )
  }
}
