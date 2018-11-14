/* eslint-disable no-trailing-spaces */
import React from "react";

class PanelIO extends React.Component {

    handleChange = (event) => {
        this.props.changeValue(event.target.value);
    };

    render () {
        return (
            <div>
                <form>
                    <input
                        type="number"
                        value={this.props.value}
                        onChange={this.handleChange}
                    >
                    </input>
                </form>
            </div>);
    }

}

export default PanelIO;