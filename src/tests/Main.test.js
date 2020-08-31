import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
// import ReactDOM from 'react-dom';
import Emitter from '../services/emitter';
import Main from '../components/Main';
import Temprature from '../components/Temprature'

Enzyme.configure({ adapter: new Adapter() })

describe('setInterval fn', () => {
    it('set interval and emitter for temprature', () => {
        const wrapper = shallow(<Main />);
        const tempWrapper = shallow(<Temprature />)
        expect(tempWrapper.state("temprature")).toEqual('N/A');


        jest.useFakeTimers();

        wrapper.instance().tempEmit();
        wrapper.instance().airPressureEmit();
        wrapper.instance().humidityEmit();
        // jest.runAllTimers(); // using runAllTimers will be error as setInterval never finishes. So it will be infinite loop.
        // jest.runOnlyPendingTimers(); // it is an ulternate to runAllTimers
        let randomNum = (Math.floor(Math.random() * 20) + 1) * 100

        let displayObject = {
            temprature: randomNum,
            airPressure: randomNum,
            humidity: randomNum
        }
        Emitter.emit('INPUT_FROM_TEMPRATURE', displayObject)
        Emitter.emit('INPUT_FROM_AIR_PRESSURE', displayObject)
        Emitter.emit('INPUT_FROM_HUMIDITY', displayObject)

        expect(tempWrapper.state("temprature")).toEqual(`${randomNum}℃`);

        jest.useRealTimers();
    });
})

