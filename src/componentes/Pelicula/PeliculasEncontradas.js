import React from 'react';
import { Media, Button, Badge } from 'react-bootstrap';

const PeliculasEncontradas = (props) => (
    <div>
        {props.peliculas.map(pelicula => (        
            <Media key={pelicula.trackId}>
                <Media.Left>
                    <img src={pelicula.artworkUrl100} alt="{pelicula.trackName}"/>
                </Media.Left>
                <Media.Body>
                    <Media.Heading>{pelicula.trackName} <Badge>{pelicula.contentAdvisoryRating}</Badge></Media.Heading>
                    <p>{pelicula.longDescription}</p>
                    <Button bsSize="xsmall" href={pelicula.previewUrl}>Ver trailer</Button>
                </Media.Body>
            </Media>
        ))}
    </div>
);

export default PeliculasEncontradas