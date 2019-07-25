import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage/MainPage';
import './App.css';
import { setSearchField, requestPlayers, requestPlayersAge, setSearchFieldAge } from '../redux/actions';


class App extends Component {

  componentDidMount() {
    this.props.onRequestPlayers();
  }

  render() {
    return <MainPage {...this.props}/>
  }
}

const mapStateToProps = state => {
  return {
    searchField: state.searchPlayers.searchField,
    searchFieldAge: state.searchPlayers.searchFieldAge,
    players: state.requestPlayers.players,
    isPending: state.requestPlayers.isPending,
    error: state.requestPlayers.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestPlayers: () => dispatch(requestPlayers()),
    onSearchChangeAge: (event) => dispatch(setSearchFieldAge(event.target.value)),
    onRequestPlayersAge: () => dispatch(requestPlayersAge())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);