import BoilingVerdict from "./BoilingVerdict";
import React from 'react';
import TemperatureInput from "./TemperatureInput";

export default class Calculator extends React.Component {
    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }

    render() {
        
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}