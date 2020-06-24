import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import Socials from './Socials.js';
import ProjectGrid from './ProjectGrid.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number_of_projects: 9,
    };
    }
  

  render() { 
    return (
      <div>
        <div>
        <Socials/>
        <Header/>
        </div>
        <ProjectGrid/>
      </div>
      
      );
  }
}
 
export default App;
