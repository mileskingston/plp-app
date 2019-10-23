import React, { useState } from 'react';
import Facet from './facet';

const Filters = ({ facets }) => {
  const [showFilters, toggleFilters] = useState(false);

  return (
    <div className="filters">
      <button
        className="button filters__button"
        type="button"
        onClick={() => toggleFilters(!showFilters)}
      >
        {showFilters ? 'Hide Filters' : 'Filters'}
      </button>

      <div className={`filters-facets ${!showFilters ? 'filters-facets--hidden' : ''}`}>
        {facets.length > 0 && facets.map((facet, index) => <Facet key={index} facet={facet} />)}
      </div>
    </div>
  );
};

export default Filters;