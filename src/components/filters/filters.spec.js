import React from 'react';
import { shallow, mount } from 'enzyme';
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
    let component = shallow(<Filters facets={facets} />);
    expect(component).toMatchSnapshot();
  });

  it('renders component after selecting a facet', () => {
    let component = mount(<Filters facets={facets} />);
    component.find('.facet-entry__input').first().simulate('click');
    expect(component).toMatchSnapshot();
  });
});