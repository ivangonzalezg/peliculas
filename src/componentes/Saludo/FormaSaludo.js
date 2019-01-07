import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

export class FormaSaludo extends Component {
  alEnviarForma = e => {
    let datos = {};
    const nombre = e.target.nombre.value;
    const mensaje = e.target.mensaje.value;
    e.preventDefault();
    if (typeof nombre === "string" && nombre.length > 0) {
      datos.nombre = nombre;
      e.target.nombre.value = "";
    }
    if (typeof mensaje === "string" && mensaje.length > 0) {
      datos.mensaje = mensaje;
      e.target.mensaje.value = "";
    }
    this.props.alObtenerNuevoDato(datos);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.alEnviarForma}>
          <FormGroup>
            <ControlLabel>Nombre</ControlLabel>
            <FormControl type="text" id="Nombre" name="nombre" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Mensaje</ControlLabel>
            <FormControl
              componentClass="textarea"
              id="Mensaje"
              name="mensaje"
            />
          </FormGroup>
          <Button type="submit">Saludar</Button>
        </form>
      </div>
    );
  }
}

export default FormaSaludo;
