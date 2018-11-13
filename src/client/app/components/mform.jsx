import React from "react";

class MForm extends React.Component {
    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange = (event) => {
        this.props.changeValue(event.target.value);
    };

    render () {
        return (
            <div>
                <form>
                    <input type="text" value={this.props.value} onChange={this.handleChange}>
                    </input>
                </form>
            </div>);
    }

}

export default MForm;
