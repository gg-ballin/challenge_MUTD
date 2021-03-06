import React, { Component } from 'react';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import './MainPage.css';

class MainPage extends Component {

  componentDidMount() {
    this.props.onRequestPlayers();
  }

  filteredPlayers = () => {
    if(this.props.searchField.length > 0 ){
        return this.props.players.filter(player => player.name.toLowerCase().includes(this.props.searchField.toLowerCase()))
    }
    return this.props.players
  }
  render() {
    const { onSearchChange, isPending } = this.props;
    return isPending ?
      <h1>Loading players</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Football Players Finder</h1>
          <SearchBox  searchChange={onSearchChange}/>
          <Scroll>
            <CardList players={this.filteredPlayers()} />
          </Scroll>
        </div>
      );
  }
}

export default MainPage;