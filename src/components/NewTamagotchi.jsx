import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewTamagotchi(props) {
  let _hunger = 10;
  let _energy = 10;
  let _boredom = 10;

  function handleNewTamagotchiSubmission(event) {
    event.preventDefault();
    props.onNewTamagotchiCreation({hunger: _hunger, energy: _energy, boredom:  _boredom, id: v4()});
  }

  return  (
    <div>
      <form onSubmit={handleNewTamagotchiSubmission}>
        <button type='submit'>Start Game!</button>
      </form>
    </div>
  );
}

NewTamagotchi.propTypes = {
  onNewTamagotchiCreation: PropTypes.func
};

export default NewTamagotchi;
