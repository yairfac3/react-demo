import React from 'react'
import Emitter from '../services/emitter';

class Humidity extends React.Component {
    timeCount = 1
    state = { humidity: 'N/A' };

    componentDidMount() {
        setInterval(() => {
            this.timeCount += 1;
            if (this.timeCount === 10) {
                this.timeCount = 1;
                this.setState({humidity: 'N/A'})
            }
        }, 100)
        Emitter.on('INPUT_FROM_HUMIDITY', (newValue) => {
            this.timeCount = 1;
            this.setState({ humidity: `${newValue.humidity}%` })
        });
    }

    componentWillUnmount() {
        Emitter.off('INPUT_FROM_HUMIDITY');
    }

    render() {
        return (
            <div className="humidity">
                <h1>Humidity</h1>
                <h4>{this.state.humidity}</h4>
            </div>
        )
    }
}

export default Humidity