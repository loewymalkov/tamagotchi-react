import React from 'react';
import NewTamagotchi from './NewTamagotchi';
import Tamagotchi from './Tamagotchi';
import Home from './Home';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      // tamagotchis levels?
    };
    // bind the methods 
  }

  // methods

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tamagotchi' render={() =>
          <Tamagotchi />}  />
        </Switch>
      </div>
    );
  }
}

export default App;