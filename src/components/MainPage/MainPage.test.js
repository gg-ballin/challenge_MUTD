import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
     const mockProps = {
         onRequestPlayers: jest.fn(),
         players: [],
         searchField: '',
         isPending: false
     }
     wrapper = shallow(<MainPage {...mockProps}/>)
})

it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
})
