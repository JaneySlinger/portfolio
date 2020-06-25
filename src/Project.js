import React from 'react';
import './project.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function Project(props) {
    return ( 
        <Card>
            <Card.Img variant="top" src={require("" + props.project.img)}/>
            <Card.Body > 
              <Card.Title >{props.project.name}</Card.Title>
              <Card.Subtitle>Python</Card.Subtitle>
              <Card.Text>
                {props.project.description}
              </Card.Text>
              <Button href={props.project.url}>View Code</Button>
              <Card.Footer>
                <p>tags</p>
              </Card.Footer>
            </Card.Body>
          </Card>
    );
}
 
export default Project;