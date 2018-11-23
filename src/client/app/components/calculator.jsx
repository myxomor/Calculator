/* eslint-disable no-trailing-spaces */
import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import { withStyles } from "@material-ui/core/styles";
import PanelIO from "./panelio.jsx";
import NumPad from "./numpad.jsx";

const cardStyles = {
    card: {
        display: "block",
        minWidth: 250,
        backgroundColor: "grey",
        margin: "auto"
    },
    cardParent: {
        position: "absolute",
        left: 0,
        to: 0,
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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
        return (
            <div className={classes.cardParent}>
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

