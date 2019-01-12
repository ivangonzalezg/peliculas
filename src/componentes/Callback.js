import React, { Component } from 'react'
import Auth from '../Auth';
import { Grid, Row, PageHeader } from 'react-bootstrap'

export class Callback extends Component {
    componentDidMount() {
        const auth = new Auth();
        auth.handleAuthentication();
    }

    render() {
        return (
            <Grid>
                <Row>
                    <PageHeader style={{textAlign: "center"}}>Cargando...</PageHeader>
                </Row>                
            </Grid>
        )
    }
}

export default Callback
