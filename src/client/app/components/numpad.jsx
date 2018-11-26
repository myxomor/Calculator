import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    button: {
        margin: theme.spacing.unit
    },
    input: {
        display: "none"
    }
});

class NumPad extends React.Component {

    sinCalc = () => {
        const { number, changeNumber } = this.props;
        const sin = Math.sin(number * 0.0174533);
        changeNumber(sin);
    };

    render () {
        const { classes } = this.props;
        return (
            <div>
                <Button
                    size="small"
                    variant="contained"
                    className={classes.button}
                    onClick={this.sinCalc}
                >
                    sin
                </Button>
            </div>);
    }

}

NumPad.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NumPad);