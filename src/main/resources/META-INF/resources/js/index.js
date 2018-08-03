import React from 'react';
import ReactDOM from 'react-dom';


export default function(elementId) {



    class Clock extends React.Component {
        render() {
            return (
                <div>
                    {/*<h1>Hello, world!</h1>*/}
                    <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
                </div>
            );
        }
    }

    function tick() {
        ReactDOM.render(
            <Clock date={new Date()} />,
            document.getElementById(elementId)
        );
    }

    setInterval(tick, 1000);
}

