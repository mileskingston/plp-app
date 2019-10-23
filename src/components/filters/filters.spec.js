import React from 'react';
import renderer from 'react-test-renderer';
import Filters from './filters';

describe('Filters Component', () => {
  const facets = [{
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
  },
  {
    value: 'value 2',
    name: 'name 2',
    entry: [{
      count: 2,
      label: 'entry label 1',
      value: 'entry 1',
    }, {
      count: 1,
      label: 'entry label 2',
      value: 'entry 2',
    }],
  }];

  it('renders component', () => {
    let component = renderer.create(<Filters facets={facets} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});