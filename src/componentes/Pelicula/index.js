import React, { Component } from "react";
import { Grid, PageHeader, Row } from "react-bootstrap";
import BuscarPelicula from "./BuscarPelicula"
import PeliculasEncontradas from "./PeliculasEncontradas";
import { Cargando } from '../Cargando';

export class Pelicula extends Component {

  state = {
    peliculas: [],
    cargando: false
  }
  peliculaPorBuscar = async (e) => {
    const peliculaPorBuscar = e.target.elements.peliculaPorBuscar.value;
    e.preventDefault();
    this.setState({ cargando: true });
    const api_fecth = await fetch(
      `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${peliculaPorBuscar}&media=movie&country=CO`
    );
    const peliculas = await api_fecth.json();
    this.setState({ peliculas: peliculas.results, cargando: false });
  }

  render() {
    if (this.state.cargando) {
      return (
        <div>
          <Grid>
            <Row>
              <PageHeader>Lista de peliculas</PageHeader>
              <BuscarPelicula peliculaPorBuscar={this.peliculaPorBuscar} />
              <Cargando />
            </Row>
          </Grid>
        </div>
      );
    }
    return (
      <div>
        <Grid>
          <Row>
            <PageHeader>Lista de peliculas</PageHeader>
            <BuscarPelicula peliculaPorBuscar={this.peliculaPorBuscar} />
          </Row>
          <br />
          <Row>
            <PeliculasEncontradas peliculas={this.state.peliculas} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Pelicula;
