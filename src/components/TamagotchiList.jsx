import React from 'react';
import Tamagotchi from './Tamagotchi';
import PropTypes from 'prop-types';

function TamagotchiList(props) {
  return (
    <div>
      {props.tamagotchiList.map((create, index) =>
        <Tamagotchi
          hunger={create.hunger}
          energy={create.energy}
          boredom={create.boredom}
          feed={props.feed}
          sleep={props.sleep}
          play={props.play}
          interval={props.interval}
          index={index}
          key={create.id} />
      )}
    </div>
  );
}

TamagotchiList.propTypes = {
  tamagotchiList: PropTypes.array,
  feed: PropTypes.func,
  sleep: PropTypes.func,
  play: PropTypes.func,
  interval: PropTypes.func,
  index: PropTypes.number
};

export default TamagotchiList;
