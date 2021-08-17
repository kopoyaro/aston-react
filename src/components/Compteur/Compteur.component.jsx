import React, { Component, Fragment } from 'react';


export class Compteur extends Component {

    constructor(){
        super()
        this.state = {
          counter: 1
        }
      }

      increment(){
          this.setState({compteur: this.counter++})
      }

render () {
  return (
    <Fragment>
      <button onClick= {this.increment} >{this.state.counter}</button>
    </Fragment>
  )
}
}