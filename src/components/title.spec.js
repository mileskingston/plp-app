import React from 'react';
import renderer from 'react-test-renderer';
import Title from './title';

describe('Title Component', () => {
  const props = {
    heading: 'Title',
    totalItems: 3,
  };

  it('renders component', () => {
    let component = renderer.create(<Title {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('renders component with no items label', () => {
    let component = renderer.create(<Title {...props} totalItems={0} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});