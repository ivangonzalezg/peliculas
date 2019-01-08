import React, { Component } from "react";
import fondo from './inicio.jpeg'

export class Inicio extends Component {
  render() {
    return (
      <div>
        <img width="100%" src={fondo} alt="Fondo" />
      </div>
    );
  }
}

export default Inicio;
