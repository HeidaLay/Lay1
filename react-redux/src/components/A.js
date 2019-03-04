import React, { Component } from 'react'

export default class A extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.match);
    return (
      <div>
          Moudle A
          <br></br>
          {this.props.match.params.Club1}
      </div>
    )
  }
}
