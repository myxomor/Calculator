/* eslint-disable no-trailing-spaces */
import React from "react";
import Button from "./button.jsx";

class NumPad extends React.Component {

    render () {
        return (
            <div>
                <Button
                    changeValue={this.props.changeValue}
                    value={this.props.value}
                />
            </div>);
    }

}

export default NumPad;
