import React, {Component} from 'react';
import './App.css';
import Socials from './Socials.js';
import ProjectGrid from './ProjectGrid.js';
import data from './ProjectData';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

class App extends Component {
  render() { 
    return (
      <div>
        <div> 
          <h1 className="header">Janey Slinger Portfolio</h1>
          <Socials/>
        </div>
        <div>
          <ProjectGrid data={data}/>
        </div>
        <div>
          <Card className = "card">
            <Card.Body >
              <Image className="cardImage" src={require("./Images/WitchPython.PNG")} fluid/>
              <Card.Title as="h2">Alexa Timetable Skill</Card.Title>
              <Card.Subtitle as="h3">Python</Card.Subtitle>
              <Card.Text className="description">
                An Alexa Skill to load an ical file (designed for University of Nottingham timetables) and provide information specialised to a university timetable format. Developed for my 3rd year dissertation.
              </Card.Text>
              <Button className="codeButton">View Code</Button>
              <Card.Footer className="cardFooter">
                <p>tags</p>
              </Card.Footer>
            </Card.Body>
            
          </Card>
        </div>
      </div>
      
      );
  }
}
 
export default App;
