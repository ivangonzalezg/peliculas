import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap'

export class PaginaNoExiste extends Component {
  render() {
    return (
      <div>
        <h1>Página no existe.</h1>
        <Form action="/">
          <Button type="submit">Ir a pagina principal</Button>
        </Form>
      </div>
    );
  }
}

export default PaginaNoExiste;
