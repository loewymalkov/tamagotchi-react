import React from 'react';
import PropTypes from 'prop-types';

function NewTamagotchi(props) {
  let _hunger = 10;
  let _energy = 10;
  let _boredom = 10;

  function handleNewTamagotchiSubmission(event) {
    event.preventDefault();
    props.onNewTamagotchiCreation({hunger: _hunger, energy: _energy, boredom:  _boredom});
  }

  return  (
    <div>
      <form onSubmit={handleNewTamagotchiSubmission}>
        <button type='submit'>Start Game!</button>
      </form>
    </div>
  );
}

Tamagotchi.propTypes = {
  onNewTamagotchiCreation: PropTypes.func
};

export default NewTamagotchi;
