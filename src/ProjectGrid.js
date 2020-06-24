import React, {Component} from 'react';
import Project from './Project.js';

class ProjectGrid extends Component {    
    render() { 
        let items = this.props.data.projects
        return (  
            <div>
                {items.map(item => <Project key={item.name} project={item}/>)}
            </div>
        );
    }
}
export default ProjectGrid;