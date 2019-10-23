import React from 'react';
import PropTypes from 'prop-types';
import { formatName } from '../../utils';
import FacetEntry from './facet-entry';

const Facet = ({ facet }) => (
  <div className="facet" key={facet.value}>
    <h3>{formatName(facet.name)}</h3>
    {facet.entry.map((entry, index) => (
      <FacetEntry entry={entry} key={index} />
    ))}
  </div>
);

Facet.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

export default Facet;