import React from 'react';
import T from 'prop-types';

const Publication = ({ publication }) => {
  return (
    <article>
      <h2>{publication.title}</h2>
      <p>{publication.text}</p>
    </article>
  );
};

Publication.propTypes = {
  publication: T.shape({
    title: T.string.isRequired,
    text: T.string.isRequired,
  }).isRequired,
};

export default Publication;
