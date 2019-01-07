import React from 'react'
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

const BuscarPelicula = (props) => {
  return (
    <Form inline onSubmit={props.peliculaPorBuscar}>
        <FormGroup>
            <FormControl type="text" name="peliculaPorBuscar" placeholder="¿Qué pelicula buscas?" />
        </FormGroup>{" "}      
        <Button type="submit">Buscar</Button>
    </Form>
  )
}

export default BuscarPelicula