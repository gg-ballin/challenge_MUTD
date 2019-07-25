import { 
    CHANGE_SEARCH_FIELD, 
    CHANGE_SEARCH_FIELD_AGE, 
    REQUEST_PLAYERS_PENDING,
    REQUEST_PLAYERS_SUCCESS,
    REQUEST_PLAYERS_FAILED
 } from './constants';

export const setSearchField = (text) => {
  console.log(text);
  return{  
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}


export const setSearchFieldAge = (text) => {
  console.log(text);
  return{  
    type: CHANGE_SEARCH_FIELD_AGE,
    payload: text
  }
}

export const requestPlayers = () => (dispatch) => {
    dispatch({ type: REQUEST_PLAYERS_PENDING });
    fetch('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
    .then(response=> response.json())
    .then(data => {
      const currentYear = new Date().getFullYear()
      const users  = data.map(item => (
        {
          ...item,
          age: currentYear - Number(item.dateOfBirth.slice(0,4))
        }
      ))
      console.log(users)
      dispatch({ type: REQUEST_PLAYERS_SUCCESS, payload: users})
    })
    .catch(error => dispatch({type:REQUEST_PLAYERS_FAILED, payload: error}))
}

export const requestPlayersAge = () => (dispatch) => {
  dispatch({ type: REQUEST_PLAYERS_PENDING });
  fetch('https://football-players-b31f2.firebaseio.com/players.json?print=pretty')
  .then(response=> response.json())
  .then(data => {
    const currentYear = new Date().getFullYear()
    const users  = data.map(item => (
      {
        ...item,
        age: currentYear - Number(item.dateOfBirth.slice(0,4))
      }
    ))
    console.log(users)
    dispatch({ type: REQUEST_PLAYERS_SUCCESS, payload: users.age})
  })
  .catch(error => dispatch({type:REQUEST_PLAYERS_FAILED, payload: error}))
}