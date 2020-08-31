import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Emitter from '../services/emitter';
import Humidity from '../components/Humidity'

Enzyme.configure({ adapter: new Adapter() })

describe('setInterval fn', () => {
    it('get emitter for humidity', () => {

        const humidityWrapper = shallow(<Humidity />)
        expect(humidityWrapper.state("humidity")).toEqual('N/A');

        Emitter.on('INPUT_FROM_AIR_PRESSURE', (newValue) => {
            expect(humidityWrapper.state("humidity")).toEqual(`${newValue.humidity}%`);
        });

    });
})

