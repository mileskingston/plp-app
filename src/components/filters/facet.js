import React from 'react';
import PropTypes from 'prop-types';
import { formatName } from '../../utils';

const Facet = ({ facet, onClick }) => {
  const facetEntry = (
    facet.entry.map((entry, index) => (
      <label key={index} className="facet-entry" htmlFor={entry.label}>
        <input
          id={entry.label}
          className="facet-entry__input"
          type="checkbox"
          onClick={() => onClick(entry)}
          name={entry.label}
          value={entry.value}
          tabIndex="0"
        />
        <span className="facet-entry__label">{entry.label} <span>{entry.count}</span></span>
      </label>
  )));

  return (
    <div className="facet" key={facet.value}>
      <h3>{formatName(facet.name)}</h3>
      {facetEntry}
    </div>
  );
};

Facet.propTypes = {
  facet: PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  }),
  onClick: PropTypes.func
};

export default Facet;