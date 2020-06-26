import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './App.css';

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
              <Button style={{backgroundColor: '#AC3B61', border: '2px solid #AC3B61', color: 'white', borderRadius: '3px', textTransform: 'uppercase'}} href={props.project.url}>View Code</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
    );
}
 
export default Project;