import React from 'react';
import renderer from 'react-test-renderer';
import Facet from './facet';

describe('Facet Component', () => {
  const facet = {
    value: 'value 1',
    name: 'name 1',
    entry: [{
      count: 2,
      label: 'entry label 1',
      value: 'entry 1',
    }, {
      count: 1,
      label: 'entry label 2',
      value: 'entry 2',
    }],
  };
  it('renders component', () => {
    let component = renderer.create(<Facet facet={facet} />).toJSON();
    expect(component).toMatchSnapshot();
  });;
});