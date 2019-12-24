import React from 'react';
import T from 'prop-types';

const Progress = ({ currentPage, totalPages }) => {
  return (
    <p>
      {currentPage + 1}/{totalPages}
    </p>
  );
};

Progress.propTypes = {
  currentPage: T.number.isRequired,
  totalPages: T.number.isRequired,
};

export default Progress;
