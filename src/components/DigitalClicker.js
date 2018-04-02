// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    constructor() {
        super();

        this.state = {
            timesClicked: 0,
        }

        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked = () => {
        this.setState ({
            timesClicked: ++this.state.timesClicked,
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClicked}>
                    {this.state.timesClicked}
                </button>
            </div>
        );
    }
}

export default DigitalClicker;