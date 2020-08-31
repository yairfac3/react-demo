import React from 'react'
import Emitter from '../services/emitter';
import '../styles/Main.css';
import Temprature from './Temprature';
import AirPressure from './AirPressure';
import Humidity from './Humidity';

class Main extends React.Component {
    state = {
        displayObject: {
            temprature: '',
            airPressure: '',
            humidity: ''
        },
    };


    tempEmit = () => {
        var rand = (Math.floor(Math.random() * 20) + 1) * 100
        this.setState({
            displayObject: {
                ...this.state.displayObject,
                temprature: rand
            }
        }, () => {
            Emitter.emit('INPUT_FROM_TEMPRATURE', this.state.displayObject)
        })
        setTimeout(this.tempEmit, rand);
    }

    airPressureEmit = () => {
        var rand = (Math.floor(Math.random() * 20) + 1) * 100
        this.setState({
            displayObject: {
                ...this.state.displayObject,
                airPressure: rand
            }
        }, () => {
            Emitter.emit('INPUT_FROM_AIR_PRESSURE', this.state.displayObject)
        })
        setTimeout(this.airPressureEmit, rand);
    }

    humidityEmit = () => {
        var rand = (Math.floor(Math.random() * 20) + 1) * 100
        this.setState({
            displayObject: {
                ...this.state.displayObject,
                humidity: rand
            }
        }, () => {
            Emitter.emit('INPUT_FROM_HUMIDITY', this.state.displayObject)
        })
        setTimeout(this.humidityEmit, rand);
    }

    componentDidMount() {
        this.tempEmit();
        this.airPressureEmit();
        this.humidityEmit();
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr className="main">
                            <td></td>
                            <td>
                                <h3>Data Scale</h3>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <Temprature />
                            </td>
                            <td>
                                <AirPressure />
                            </td>
                            <td>
                                <Humidity />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Main