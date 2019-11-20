import React from 'react';
import NewTamagotchi from './NewTamagotchi';
import Tamagotchi from './Tamagotchi';
import Home from './Home';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // tamagotchis levels?
      alive: true
    };
    // bind the methods 
    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.handleSleepClick = this.handleSleepClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
  }
  // methods
  handleFeedClick(index) {
    [index].hunger ++;
  }

  handleSleepClick(index) {
    [index].energy ++;
  }

  handlePlayClick(index) {
    [index].boredom ++;
  }
  



  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tamagotchi' render={() =>
            <Tamagotchi />}  />
        </Switch>
        <NewTamagotchi />
      </div>
    );
  }
}

export default App;