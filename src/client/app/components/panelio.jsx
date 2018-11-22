/* eslint-disable no-trailing-spaces */
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: "auto",
        marginRight: "auto"
    }
});

class PanelIO extends React.Component {

    handleChange = (event) => {
        this.props.changeNumber(event.target.value);
    };

    render () {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-number"
                value={this.props.number}
                onChange={this.handleChange}
                type="number"
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            </form>
            /*             <div>
                <form>
                    <input
                        type="number"
                        value={this.props.number}
                        onChange={this.handleChange}
                    >
                    </input>
                </form>
            </div>
            */
);
    }

}
PanelIO.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PanelIO);
/* export default PanelIO;*/