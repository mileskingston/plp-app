import React from 'react';
import renderer from 'react-test-renderer';
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
    let component = renderer.create(<ProductGrid products={products} />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('renders component when no products', () => {
    let component = renderer.create(<ProductGrid products={[]} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});