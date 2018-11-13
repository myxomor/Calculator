import React from "react";

class Button extends React.Component {

    calculating = () => {
        this.props.changeValue(Math.sin(this.props.value));
    };

    render () {
        return (
        <button onClick={this.calculating}>sin</button>
        );
    }

}

export default Button;
