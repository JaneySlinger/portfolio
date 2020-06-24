import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import Socials from './Socials.js';
import ProjectGrid from './ProjectGrid.js';
import data from './ProjectData';

class App extends Component {
  render() { 
    return (
      <div>
        <div>
        <Socials/>
        <Header/>
        </div>
        <ProjectGrid
          data={data}
        />
      </div>
      
      );
  }
}
 
export default App;
