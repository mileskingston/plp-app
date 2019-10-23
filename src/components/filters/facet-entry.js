import React from 'react';
import PropTypes from 'prop-types';

const FacetEntry = ({ entry }) => (
  <label className="facet-entry" ufor={entry.label}>
    <input
      id={entry.label}
      className="facet-entry__input"
      type="checkbox"
      name={entry.label}
      value={entry.value}
      tabIndex="0"
    />
    <span className="facet-entry__label">{entry.label} <span>{entry.count}</span></span>
  </label>
);

FacetEntry.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  count: PropTypes.number
};

export default FacetEntry;