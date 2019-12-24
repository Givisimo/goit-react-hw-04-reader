import React from 'react';
import T from 'prop-types';

const Controls = ({ onButtonClick, prevBtnDisabled, nextBtnDisabled }) => {
  return (
    <section>
      <button
        type="button"
        onClick={() => onButtonClick(-1)}
        disabled={prevBtnDisabled}
      >
        Backward
      </button>
      <button
        type="button"
        onClick={() => onButtonClick(1)}
        disabled={nextBtnDisabled}
      >
        Forward
      </button>
    </section>
  );
};

Controls.propTypes = {
  onButtonClick: T.func.isRequired,
  prevBtnDisabled: T.bool.isRequired,
  nextBtnDisabled: T.bool.isRequired,
};

export default Controls;
