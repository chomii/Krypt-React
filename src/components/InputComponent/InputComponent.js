import React, {Component} from 'react';
import './InputComponent.css'
import CustomInputField from './CustomInputField/CustomInputField';

class InputComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div className="input-wrapper">
                <CustomInputField onValueChange={this.handleOnChange} />
                <h2 className="input-text">{this.state.input}</h2>
            </div>
        )
    }

}

export default InputComponent;