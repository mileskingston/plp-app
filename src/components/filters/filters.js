import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Facet from './facet';

const Filters = ({ facets }) => {
  const [showFilters, toggleFilters] = useState(false);
  const [selectedFacetEntries, updateFaceEntries] = useState([]);

  const addSelectedFacet = (facetEntry) => {
    const getItemIndex = selectedFacetEntries.findIndex(selectedFacetEntries => selectedFacetEntries.label === facetEntry.label);
    if (getItemIndex === -1) {
      updateFaceEntries(selectedFacetEntries.concat(facetEntry));
    }
  };

  const removeSelectedFacet = (facetEntry) => {
    updateFaceEntries(selectedFacetEntries.filter(entry => entry.label !== facetEntry.label));
  };

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
        {selectedFacetEntries.length > 0 &&
          <Fragment>
            <h3>Selected Filters</h3>
            {selectedFacetEntries.map((entry, index) => (
              <div className="facet-entry" key={index}>
                {entry.label}
                <button
                  className="button facet-entry__button"
                  type="button"
                  onClick={() => removeSelectedFacet(entry)}
                >
                X
                <span className="sr-only">Remove {entry.label}</span>
                </button>
              </div>
            ))}
          </Fragment>
        }

        {facets.length > 0 && 
          facets.map((facet, index) => (
            <Facet key={index} facet={facet} onClick={addSelectedFacet} />
        ))}
      </div>
    </div>
  );
};

Filters.propTypes = {
  facets: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
      entry: PropTypes.arrayOf(PropTypes.object)
    }),
  )
};

export default Filters;