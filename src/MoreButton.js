import Button from 'react-bootstrap/Button'
import React from 'react';

function MoreButton(props) {
    if(props.available != "none"){
        return (
            <Button style={{backgroundColor: '#AC3B61', border: '2px solid #AC3B61', color: 'white', borderRadius: '3px', textTransform: 'uppercase'}} href={props.url}>{props.available}</Button>
        ); 
    } else {
        return null;
    }
}

export default MoreButton;