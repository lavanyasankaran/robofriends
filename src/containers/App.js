import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      games: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('http://starlord.hackerearth.com/gamesext')
      .then(response=> response.json())
      .then(users => {this.setState({ games: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { games, searchfield } = this.state;
    const filteredgames = games.filter(game =>{
      return game.platform.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !games.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Games</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList games={filteredgames} />
          </Scroll>
        </div>
      );
  }
}

export default App;