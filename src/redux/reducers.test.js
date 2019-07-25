import { 
    CHANGE_SEARCH_FIELD, 
    CHANGE_SEARCH_FIELD_AGE,
    REQUEST_PLAYERS_PENDING,
    REQUEST_PLAYERS_SUCCESS,
    REQUEST_PLAYERS_FAILED
 } from './constants';

 import * as reducers from './reducers';

 describe('searchPlayers and SearchPlayersAge', () => {
    const initialStateSearch = {
        searchField: ''
    } 
    const initialStateSearchAge = {
        searchFieldAge:''
    }
    it('should return the initial state', () => {
         expect(reducers.searchPlayers(undefined, {})).toEqual({searchField: ''})
     })

    it('should return the initial state', () => {
        expect(reducers.searchPlayersAge(undefined, {})).toEqual({ searchFieldAge: ''})
    })
    it('should handle CHANGE_SEARCHFIELD', () => {
        expect(reducers.searchPlayers(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'})
    })

    it('should handle CHANGE_SEARCHFIELD_AGE!!!!!!!', () => {
        expect(reducers.searchPlayersAge(initialStateSearchAge, {
            type: CHANGE_SEARCH_FIELD_AGE,
            payload: 'abc'
        })).toEqual({
            searchFieldAge: 'abc'})
    })
 })

 describe('requestPlayers and requestPlayersAge', () => {
    const initialStatePlayersMock = {
        isPending: false,
        players: [],
        error: ''
    }
    const initialStatePlayersAgeMock = {
        isPending: false,
        players: [],
        error: ''
    }

    it('should return the initial state of players', () => {
        expect(reducers.requestPlayers(undefined, {})).toEqual(initialStatePlayersMock, initialStatePlayersAgeMock)
    })

    it('should return the initial state of players age', () => {
        expect(reducers.requestPlayersAge(undefined, {})).toEqual(initialStatePlayersMock, initialStatePlayersAgeMock)
    })

    it('should handle REQUEST_PLAYERS_PENDING action', () => {
        expect(reducers.requestPlayers(initialStatePlayersMock, {
            type: REQUEST_PLAYERS_PENDING
        })).toEqual({
            players: [],
            isPending: true,
            error: ''
        })
    })

    it('should handle REQUEST_PLAYERS_SUCCESS action', () => {
        expect(reducers.requestPlayers(initialStatePlayersMock, {
            type: REQUEST_PLAYERS_SUCCESS,
            payload: [{
                id:3,
                name: 'test',
                position: 'test',
                age: 23
            }]
        })).toEqual({
            players: [{
                id:3,
                name: 'test',
                position: 'test',
                age: 23
            }],
            isPending: false,
            error: ''
        })
    })

    it('should handle REQUEST_PLAYERS_FAILED action', () => {
        expect(reducers.requestPlayers(initialStatePlayersMock, {
            type: REQUEST_PLAYERS_FAILED,
            payload: 'error'
        })).toEqual({
            players: [],
            isPending: false,
            error: 'error'
        })
    })





    it('should handle REQUEST_PLAYERS_PENDING action', () => {
        expect(reducers.requestPlayersAge(initialStatePlayersAgeMock, {
            type: REQUEST_PLAYERS_PENDING
        })).toEqual({
            players: [],
            isPending: true,
            error: ''
        })
    })

    it('should handle REQUEST_PLAYERS_FAILED action', () => {
        expect(reducers.requestPlayersAge(initialStatePlayersAgeMock, {
            type: REQUEST_PLAYERS_FAILED,
            payload: 'error'
        })).toEqual({
            players: [],
            isPending: false,
            error: 'error'
        })
    })
 })