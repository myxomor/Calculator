/* eslint-disable no-trailing-spaces */
import React from "react";
import PanelIO from "./panelio.jsx";
import NumPad from "./numpad.jsx";

class Calculator extends React.Component {

    state={
        number: 0
    };
    changeNumber = (value) => this.setState({number: value});

    render () {
        return (
            <div style={styles.calcContainer}>
                <div>Works only with . when decimal matters</div>
                <PanelIO
                    changeNumber={this.changeNumber}
                    number={this.state.number}
                />
                <NumPad
                    changeNumber={this.changeNumber}
                    number={this.state.number}
                />
                {this.state.number}
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