import React, {Component} from 'react';
import './App.css';
import Socials from './Socials.js';
import ProjectGrid from './ProjectGrid.js';
import data from './ProjectData';

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
      </div>
      
      );
  }
}
 
export default App;
