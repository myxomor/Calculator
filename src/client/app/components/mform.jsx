import React from "react";

class MForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value1: "Hi users!!"
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange = (event) => {
        this.props.changeValue(event.target.value);
    };

    render () {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleChange}>
                    </input>
                </form>
                <div>
                    {this.state.value1}
                </div>
            </div>);
    }

}

export default MForm;
