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
    cardContainer: {
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

};

class Calculator extends React.Component {

    state={
        number: 0
    };

    changeNumber = (value) => this.setState({number: value});

    render () {
        const { classes } = this.props;
        return (
            <div className={classes.cardContainer}>
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

