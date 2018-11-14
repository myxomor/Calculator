/* eslint-disable no-trailing-spaces */
import React from "react";

class PanelIO extends React.Component {

    handleChange = (event) => {
        this.props.changeNumber(event.target.value);
    };

    render () {
        return (
            <div>
                <form>
                    <input
                        type="number"
                        value={this.props.number}
                        onChange={this.handleChange}
                    >
                    </input>
                </form>
            </div>);
    }

}

export default PanelIO;