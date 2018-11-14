/* eslint-disable no-trailing-spaces */
import React from "react";
import Button from "./button.jsx";

class NumPad extends React.Component {

    render () {
        return (
            <div>
                <Button
                    changeNumber={this.props.changeNumber}
                    number={this.props.number}
                />
            </div>);
    }

}

export default NumPad;
