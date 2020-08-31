import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import Emitter from '../services/emitter';
import Temprature from '../components/Temprature'

Enzyme.configure({ adapter: new Adapter() })

describe('setInterval fn', () => {
    it('set interval and emitter for temprature', () => {

        const tempWrapper = shallow(<Temprature />)
        expect(tempWrapper.state("temprature")).toEqual('N/A');


        Emitter.on('INPUT_FROM_TEMPRATURE', (newValue) => {
            expect(tempWrapper.state("temprature")).toEqual(`${newValue.temprature}℃`);
        });

    });
})

