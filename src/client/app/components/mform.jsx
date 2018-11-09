import React from "react";

class MForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: "Hi users!"
        };

        this.handleChange = this.handleChange.bind(this);
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    };

    render () {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.value} onChange={this.handleChange}>
                    </input>
                </form>
                <div>
                    {this.state.value}
                </div>
            </div>);
    }

}

export default MForm;
