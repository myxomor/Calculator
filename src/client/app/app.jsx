import React from "react";
import ReactDOM from "react-dom";
import Window from "./components/window.jsx";

class App extends React.Component {

    render () {
        return (
            <Window/>
        );
    }

}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);