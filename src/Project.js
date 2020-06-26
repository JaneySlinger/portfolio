import React from 'react';
import Card from 'react-bootstrap/Card'
import './App.css';
import MoreButton from './MoreButton';

function Project(props) {
    return ( 
        <Card style={{border: '2px solid #BAB2B5'}}>
            <Card.Img variant="top" src={require("" + props.project.img)}/>
            <Card.Body className="cardContent"> 
              <Card.Title >{props.project.name}</Card.Title>
              <Card.Subtitle style={{color: '#123C69'}}>{props.project.language}</Card.Subtitle>
              <Card.Text>
                {props.project.description}
              </Card.Text>
              <Card.Footer>
                <MoreButton url={props.project.url} available={props.project.available}/>
              </Card.Footer>
            </Card.Body>
          </Card>
    );
}
 
export default Project;