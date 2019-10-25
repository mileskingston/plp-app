import React from 'react';
import { shallow } from 'enzyme';
import Product from './product';

describe('Product Component', () => {
  const product = {
    name: 'Item name',
    thumbnail: '/image/url',
    price: [
      {
        value: '260.0'
      }
    ]
  };
  
  it('renders component', () => {
    let component = shallow(<Product product={product} />);
    expect(component).toMatchSnapshot();
  });
});