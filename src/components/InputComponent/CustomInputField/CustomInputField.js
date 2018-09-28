import React from 'react';
import './CustomInputField.css';


const inputStyle = ['input-field'];

const CustomInputField = props => <input className={props.iconType ? setIcon(props.iconType) : inputStyle[0]} onChange={props.onValueChange} />

function setIcon(iconType) {
    switch(iconType) {
    
        case 'search':
            inputStyle.push('icon-search');
            return inputStyle.join(' ');
        case 'email':
            inputStyle.push('icon-email');
            return inputStyle.join(' ');
        default:
            return inputStyle[0];
    }
} 

export default CustomInputField;