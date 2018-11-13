import React from "react";
import MForm from "./mform.jsx";
import NumPad from "./numpad.jsx";

class Calculator extends React.Component {

    constructor () {
        super();
        this.state = {
            value: "test"
        };
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue = (text) => {
        this.setState({value: text});
    };

    render () {
        return (
            <div style={styles.calcContainer}>
                <div>Works only with . when decimal matters</div>
                <MForm changeValue={this.changeValue} value={this.state.value}/>
                <NumPad changeValue={this.changeValue} value={this.state.value}/>
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