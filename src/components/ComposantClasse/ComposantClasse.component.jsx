import React, { Component, Fragment } from 'react';


export class ComposantClasse extends Component {

render () {
  return (
    <Fragment>
      <h1>Super titre</h1>
      <p>{this.props.nom}</p>
      <button onClick={this.props.modifNom}>change name</button>
    </Fragment>
  )
}
}
