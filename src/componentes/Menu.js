import React, { Component } from "react";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Menu extends Component {
  render() {
    return (
      <Navbar style={{position: "fixed", width: "100%"}} >
        <Nav>
          <NavItem
            componentClass={Link}
            href="/"
            to="/"
            active={window.location.pathname === "/"}
          >
            Inicio
          </NavItem>
          {this.props.auth.isAuthenticated() &&
            <NavItem
              componentClass={Link}
              href="/peliculas"
              to="/peliculas"
              active={window.location.pathname === "/peliculas"}
            >
              Buscar peliculas
            </NavItem>
          }
          <NavItem
            componentClass={Link}
            href="/saludar"
            to="/saludar"
            active={window.location.pathname === "/saludar"}
          >
            Saludar
          </NavItem>
          {!this.props.auth.isAuthenticated() &&
            <NavItem style={{position: "absolute", right: "0%"}}>
              <Button bsStyle="success" bsSize="xsmall" onClick={this.props.auth.login}>Iniciar sesión</Button>
            </NavItem>
          }
          {this.props.auth.isAuthenticated() &&
            <NavItem style={{position: "absolute", right: "0%"}}>
              <Button bsStyle="danger" bsSize="xsmall" onClick={this.props.auth.logout}>Cerrar sesión</Button>
            </NavItem>
          }
        </Nav>
      </Navbar>
    );
  }
}

export default Menu;
