import React from 'react'
import Emitter from '../services/emitter';

class AirPressure extends React.Component {
    timeCount = 1
    state = { airPressure: 'N/A' };

    componentDidMount() {
        setInterval(() => {
            this.timeCount += 1;
            if (this.timeCount === 10) {
                this.timeCount = 1;
                this.setState({airPressure: 'N/A'})
            }
        }, 100)

        Emitter.on('INPUT_FROM_AIR_PRESSURE', (newValue) => {
            this.timeCount = 1;
            this.setState({ airPressure: newValue.airPressure + 'mm' })
        });
    }

    componentWillUnmount() {
        Emitter.off('INPUT_FROM_AIR_PRESSURE');
    }

    render() {
        return (
            <div className="air-pressure">
                <h1>Air Pressure</h1>
                <h4>{this.state.airPressure}</h4>
            </div>
        )
    }
}

export default AirPressure