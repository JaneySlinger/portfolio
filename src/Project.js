import React from 'react';
import './project.css';

function Project(props) {
    return ( 
        
            <button className="projectBtn">
                <img className = "projectImage" src= {require( "" + props.project.img)} />
                <p>{props.project.name}</p>
            </button>
        
        
    );
}
 
export default Project;