import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { MensajeSaludo } from "./MensajeSaludo";
import { FormaSaludo } from "./FormaSaludo";

export class Saludo extends Component {
  state = {
    nombre: this.props.nombre,
    mensaje: this.props.mensaje
  };

  manejarNuevoDato = datos => {
    this.setState(datos);
  };

  render() {
    const { nombre, mensaje } = this.state;
    return (
      <Grid>
        <MensajeSaludo nombre={nombre} mensaje={mensaje} />
        <FormaSaludo alObtenerNuevoDato={this.manejarNuevoDato} />
      </Grid>
    );
  }
}

Saludo.defaultProps = {
  nombre: "Iván",
  mensaje: "¿Comó estás?"
};

export default Saludo;
