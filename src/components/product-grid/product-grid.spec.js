import React from 'react';
import { shallow } from 'enzyme';
import ProductGrid from './product-grid';

describe('Product Grid Component', () => {
  const products = [
    {
      name: 'Product',
      price: [{
        currency: 'USD',
        description: 'L',
        usage: 'Display',
        value: '400.0',
      }],
      thumbnail: '/image/url',
    },
    {
      name: 'Product 2',
      price: [{
        currency: 'USD',
        description: 'L',
        usage: 'Display',
        value: '200.0',
      }],
      thumbnail: '/image-2/url',
    },
  ];

  it('renders component', () => {
    let component = shallow(<ProductGrid products={products} />);
    expect(component).toMatchSnapshot();
  });

  it('renders component when no products', () => {
    let component = shallow(<ProductGrid products={[]} />);
    expect(component).toMatchSnapshot();
  });
});