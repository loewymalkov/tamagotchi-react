import React from 'react';
import NewTamagotchi from './NewTamagotchi';
import TamagotchiList from './TamagotchiList';
import Home from './Home';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // tamagotchi list
      masterTamagotchiList: []
    };
    // bind the methods 
    this.handleNewTamagotchiToList = this.handleNewTamagotchiToList.bind(this);
    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.handleSleepClick = this.handleSleepClick.bind(this);
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.setInterval = this.setInterval.bind(this);
  }
  // methods
  handleFeedClick(index) {
    var newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList[index].hunger --;
    this.setState({ masterTamagotchiList: newMasterTamagotchiList});
  }

  handleSleepClick(index) {
    var newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList[index].energy ++;
    this.setState({ masterTamagotchiList: newMasterTamagotchiList});
  }

  handlePlayClick(index) {
    var newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList[index].boredom --;
    this.setState({ masterTamagotchiList: newMasterTamagotchiList});
  }

  setInterval(index) {
    var newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList[index].hunger ++;
    newMasterTamagotchiList[index].energy --;
    newMasterTamagotchiList[index].boredom ++;
    this.setState({ masterTamagotchiList: newMasterTamagotchiList});
  }
  
  handleNewTamagotchiToList(newTamagotchi) {
    var newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList.push(newTamagotchi);
    this.setState({ masterTamagotchiList: newMasterTamagotchiList});
  }

  

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tamagotchi' render={() =>
            <TamagotchiList tamagotchiList= {this.state.masterTamagotchiList} interval={this.setInterval} feed={this.handleFeedClick} sleep={this.handleSleepClick} play={this.handlePlayClick} />}  />
        </Switch>
        <NewTamagotchi onNewTamagotchiCreation= {this.handleNewTamagotchiToList} />
      </div>
    );
  }
}

export default App;