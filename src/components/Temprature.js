import React from 'react'
import Emitter from '../services/emitter';

class Temprature extends React.Component {
    timeCount = 1
    state = { temprature: 'N/A' };

    componentDidMount() {
        setInterval(() => {
            this.timeCount += 1;
            if (this.timeCount === 10) {
                this.timeCount = 1;
                this.setState({ temprature: 'N/A' })
            }
        }, 100)

        Emitter.on('INPUT_FROM_TEMPRATURE', (newValue) => {
            this.timeCount = 1;
            this.setState({ temprature: `${newValue.temprature}℃` })
        });
    }

    componentWillUnmount() {
        Emitter.off('INPUT_FROM_TEMPRATURE');
    }

    render() {
        return (
            <div className="temprature">
                <h1>Temprature</h1>
                <h3 className="temprature-text" data-testid="temprature-text">{this.state.temprature}</h3>
            </div>
        )
    }
}

export default Temprature