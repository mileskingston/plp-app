import React from 'react';
import { shallow } from 'enzyme';
import Facet from './facet';

describe('Facet Component', () => {
  const props = {
    facet: {
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
    onClick: jest.fn(),
  };
  it('renders component', () => {
    expect(shallow(<Facet {...props} />)).toMatchSnapshot();
  });

  it('renders component', () => {
    let component = shallow(<Facet {...props} />);
    component.find('.facet-entry__input').first().simulate('click');
    expect(props.onClick).toHaveBeenCalled();
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});