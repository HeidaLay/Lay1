import React, { Component } from 'react'
let E = ({match}) =>{
  console.log(match)
  return (
    <div>
      { match ? match.params.children:'False'}
      
    </div>
  )
}
export default E;
