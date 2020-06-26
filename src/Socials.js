import React, {Component} from 'react';
import './App.css';
//import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

class Socials extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Socials">
                <p className="social">janeyslinger@gmail.com</p>
                <p className="social">
                    <a className="social" href="https://www.linkedin.com/in/janey-slinger-18865b151">LinkedIn</a>
                </p>
                <p className="social">
                    <a className="social" href="https://github.com/janeyslinger">Github</a>
                </p>
                
            </div>
         );
    }
}
 
export default Socials;