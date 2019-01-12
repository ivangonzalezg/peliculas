import React, { Component } from "react";
import { Navbar, Nav, NavItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Menu.css";

export class Menu extends Component {
  render() {
    const name = localStorage.getItem("user_name");
    const space = " ";
    return (
      <Navbar className="Navbar-top">
        <Nav className="Nav-top">
          <NavItem
            componentClass={Link}
            href="/"
            to="/"
            active={window.location.pathname === "/"}
          >
            Inicio
          </NavItem>
          {this.props.auth.isAuthenticated() && (
            <NavItem
              componentClass={Link}
              href="/peliculas"
              to="/peliculas"
              active={window.location.pathname === "/peliculas"}
            >
              Buscar peliculas
            </NavItem>
          )}
          <NavItem
            componentClass={Link}
            href="/saludar"
            to="/saludar"
            active={window.location.pathname === "/saludar"}
          >
            Saludar
          </NavItem>
          {!this.props.auth.isAuthenticated() && (
            <Button
              className="login"
              bsStyle="success"
              onClick={this.props.auth.login}
            >
              Iniciar sesión
            </Button>
          )}
          {this.props.auth.isAuthenticated() && (
            <div className="login">
              Bienvenido <i>{name}</i>{space}
              <Button bsStyle="danger" onClick={this.props.auth.logout}>
                Cerrar sesión
              </Button>
            </div>
          )}
        </Nav>
      </Navbar>
    );
  }
}

export default Menu;
