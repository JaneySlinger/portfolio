import React, {Component} from 'react';
import './App.css';
import Socials from './Socials.js';
import ProjectGrid from './ProjectGrid.js';
import data from './ProjectData';
import CardColumns from 'react-bootstrap/CardColumns'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() { 
    return (
      <div className="App">
        <div className="title"> 
          <h1 className="header">Janey Slinger Portfolio</h1>
          <Socials/>
        </div>
        <div>
        <CardColumns className="content">
          <ProjectGrid data={data}/>
        </CardColumns> 
        </div>
      </div>
      
      );
  }
}
 
export default App;
