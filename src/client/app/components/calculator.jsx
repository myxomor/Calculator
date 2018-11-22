/* eslint-disable no-trailing-spaces */
import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import PanelIO from "./panelio.jsx";
import NumPad from "./numpad.jsx";

const cardStyles = {
    cardParent: {
        display: "table-cell",
        verticalAlign: "middle"
    },

    card: {
        maxWidth: 275,
        backgroundColor: "red",
        display: "block",
        margin: "auto"
    }
    /*
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    } */
};

class Calculator extends React.Component {

    state={
        number: 0
    };

    changeNumber = (value) => this.setState({number: value});

    render () {
        const { classes } = this.props;
        return (<div className="cardParent">
            <Card className={classes.card}>
                <PanelIO
                    changeNumber={this.changeNumber}
                    number={this.state.number}
                />
                <NumPad
                    changeNumber={this.changeNumber}
                    number={this.state.number}
                />
                {this.state.number}
            </Card>
            </div>
        );
    }

}

Calculator.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(cardStyles)(Calculator);

