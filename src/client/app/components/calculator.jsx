/* eslint-disable no-trailing-spaces */
import React from "react";
import PanelIO from "./panelio.jsx";
import NumPad from "./numpad.jsx";

class Calculator extends React.Component {

    state={
        value: 0
    };
    changeValue = (text) => this.setState({value: text});

    render () {
        return (
            <div style={styles.calcContainer}>
                <div>Works only with . when decimal matters</div>
                <PanelIO
                    changeValue={this.changeValue}
                    value={this.state.value}
                />
                <NumPad
                    changeValue={this.changeValue}
                    value={this.state.value}
                />
                {this.state.value}
            </div>);
    }

}

export default Calculator;

const styles = {
    calcContainer: {
        width: "300px",
        height: "300px",
        border: "1px solid black",
        borderRadius: "8px",
        boxShadow: "0 0 5px gray"
    }
};