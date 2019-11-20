import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

function Home(){


  
  return (

    <div className="row">
      <div className="col s12 m6">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">TAMAGOTCHI GAME</span>
            <p>Click on the play tab on the navbar if you would like to play around with your tamagotchi. Come back to this page anytime to read these boring instructions!</p>
            <ul>
              <li> * As time goes on, your fren's hunger, energy and boredom levels will increase negatively</li>
              <li> * To keep it healthy, press on the respective buttons (Feed, Sleep, Play) to increase the level</li>
              <li> * If any of these levels reach 0, the tamagotchi will dip</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Home;