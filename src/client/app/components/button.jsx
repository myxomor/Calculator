/* eslint-disable no-trailing-spaces */
import React from "react";

class Button extends React.Component {

    sinCalc = () => {
        const { number, changeNumber } = this.props;
        const sin = Math.sin(number);
        changeNumber(sin);
    };

    render () {
        return (
        <button onClick={this.sinCalc}>sin</button>
        );
    }

}

export default Button;
