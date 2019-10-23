import React from 'react';
import renderer from 'react-test-renderer';
import FacetEntry from './facet-entry';

describe('FacetEntry Component', () => {
  const entry = {
    label: 'facet entry label',
    count: 2,
    value: 'facet entry value'
  };

  it('renders component', () => {
    let component = renderer.create(<FacetEntry entry={entry} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});