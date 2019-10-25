import React from 'react';
import { shallow } from 'enzyme';
import Title from './title';

describe('Title Component', () => {
  const props = {
    heading: 'Title',
    totalItems: 3,
  };

  it('renders component', () => {
    let component = shallow(<Title {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('renders component with no items label', () => {
    let component = shallow(<Title {...props} totalItems={0} />);
    expect(component).toMatchSnapshot();
  });
});