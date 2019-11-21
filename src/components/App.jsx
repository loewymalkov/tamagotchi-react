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
    // this.setTimeout = this.setTimeout.bind(this);
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

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() => 
      this.setTimeout(),
    1000
    );
  }

  setTimeout() {
    console.log('here');
    var newMasterTamagotchiList = this.state.masterTamagotchiList.slice();
    newMasterTamagotchiList[0].hunger ++;
    newMasterTamagotchiList[0].energy --;
    newMasterTamagotchiList[0].boredom ++;
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
            <TamagotchiList tamagotchiList= {this.state.masterTamagotchiList}  feed={this.handleFeedClick} sleep={this.handleSleepClick} play={this.handlePlayClick} />}  />
        </Switch>
        <NewTamagotchi onNewTamagotchiCreation= {this.handleNewTamagotchiToList} />
      </div>
    );
  }
}

export default App;