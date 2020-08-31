import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Emitter from '../services/emitter';
import AirPressure from '../components/AirPressure'

Enzyme.configure({ adapter: new Adapter() })

describe('setInterval fn', () => {
    it('get emitter for airPressure', () => {

        const airPressureWrapper = shallow(<AirPressure />)
        expect(airPressureWrapper.state("airPressure")).toEqual('N/A');

        Emitter.on('INPUT_FROM_AIR_PRESSURE', (newValue) => {
            expect(airPressureWrapper.state("airPressure")).toEqual(`${newValue.airPressure}mm`);
        });

    });
})

