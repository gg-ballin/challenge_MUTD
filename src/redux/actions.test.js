import * as actions from './actions';
import { 
    CHANGE_SEARCH_FIELD, 
    CHANGE_SEARCH_FIELD_AGE, 
    REQUEST_PLAYERS_PENDING,
    REQUEST_PLAYERS_SUCCESS,
    REQUEST_PLAYERS_FAILED
 } from './constants';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

describe("setSearchField's, requestPlayers and requestPlayersAge", () => {
    it('should create an action to search players', () => {
        const text = 'player';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        }
        expect(actions.setSearchField(text)).toEqual(expectedAction)
    })

    it('should create an action to search players age', () => {
        const text = '23';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD_AGE,
            payload: text
        }
        expect(actions.setSearchFieldAge(text)).toEqual(expectedAction)
    })

    it('handles requesting players API', () => {
        const store = mockStore();
        store.dispatch(actions.requestPlayers());
        const action = store.getActions();
        
        const expectedAction = {
            type: REQUEST_PLAYERS_PENDING
        }
        expect(action[0]).toEqual(expectedAction)
    })

    it('handles requesting players age API', () => {
        const store = mockStore();
        store.dispatch(actions.requestPlayersAge());
        const action = store.getActions();
        
        const expectedAction = {
            type: REQUEST_PLAYERS_PENDING
        }
        expect(action[0]).toEqual(expectedAction)
    })

    it('handles success requesting players API', () => {
        const store = mockStore();
        store.dispatch(actions.requestPlayers());
        const text = {
            id: 1,
            name: 'Eden Hazard',
            position: 'Keeper',
            age: 27
        }
        const action = store.dispatch(
            {
                type: REQUEST_PLAYERS_SUCCESS,
                payload: text
            })
        
        const expectedAction = {
            type: REQUEST_PLAYERS_SUCCESS,
            payload: text
        }
        expect(action).toEqual(expectedAction)
    })

    it('handles success requesting players age API', () => {
        const store = mockStore();
        store.dispatch(actions.requestPlayersAge());
        const text = {
            id: 1,
            name: 'Eden Hazard',
            position: 'Keeper',
            age: 27
        }
        const action = store.dispatch(
            {
                type: REQUEST_PLAYERS_SUCCESS,
                payload: text.age
            })
        
        const expectedAction = {
            type: REQUEST_PLAYERS_SUCCESS,
            payload: text.age
        }
        expect(action).toEqual(expectedAction)
    })
})
    