import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render CardList component', () => {
    const mockPlayers = [
        {
            id: 1,
            name: 'Eden Hazard',
            position: 'Keeper',
            age: 27

        }
    ]
    expect(shallow(<CardList players = {mockPlayers}/> )).toMatchSnapshot();
})
