import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Tamagotchi (props) {

  function handleFeedClick() {
    props.feed(props.index);
  }

  function handleSleepClick() {
    props.sleep(props.index);
  }

  function handlePlayClick() {
    props.play(props.index);
  }

  
  setTimeout(() => {
    props.interval(props.index);
  }, 1000);

  return (
    <div className="row">
      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Hunger level</span>
            <p><button className="card-body black-text" onClick={handleFeedClick}>Feed!</button></p>
            <span >{props.hunger}</span>
          </div>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Energy level</span>
            <p><button className="card-body black-text" onClick={handleSleepClick}>Put to Sleep!</button></p>
            <span >{props.energy}</span>
          </div>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Boredom level</span>
            <p><button className="card-body black-text" onClick={handlePlayClick}>Play!</button></p>
            <span >{props.boredom}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

Tamagotchi.propTypes = {
  hunger: PropTypes.number,
  energy: PropTypes.number,
  boredom: PropTypes.number,
  feed: PropTypes.func,
  sleep: PropTypes.func,
  play: PropTypes.func,
  interval: PropTypes.func,
  index: PropTypes.number
};

export default Tamagotchi;
