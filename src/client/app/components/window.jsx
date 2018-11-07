import React from "react";
import MForm from "./mform.jsx";
import NumPad from "./numpad.jsx";

class Window extends React.Component {

    render () {
        const wndwStl={width:'300px', height:'300px', border:'1px solid black', borderRadius:'8px'};
        return (
            <div style={wndwStl}>
                <MForm />
                <NumPad/>
            </div>);
    }

}

export default Window;