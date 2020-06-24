import React, {Component} from 'react';
import Project from './Project.js';

class ProjectGrid extends Component {
    renderProject(i) {
        return (
            <Project
                value={i}
            />
        )
    }
    
    render() { 
        return (
            <div>
                <div>
                    {this.renderProject(1)}
                    {this.renderProject(2)}
                    {this.renderProject(3)}
                </div>
                <div>
                    {this.renderProject(4)}
                    {this.renderProject(5)}
                    {this.renderProject(6)}
                </div>
                <div>
                    {this.renderProject(7)}
                    {this.renderProject(8)}
                    {this.renderProject(9)}
                </div>
            </div>
          );
    }
}
 
export default ProjectGrid;