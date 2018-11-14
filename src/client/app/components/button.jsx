/* eslint-disable no-trailing-spaces */
import React from "react";

class Button extends React.Component {

    sinCalc = () => {
        const { value, changeValue } = this.props;
        const sin = Math.sin(value);
        changeValue(sin);
    };

    render () {
        return (
        <button onClick={this.sinCalc}>sin</button>
        );
    }

}

export default Button;
