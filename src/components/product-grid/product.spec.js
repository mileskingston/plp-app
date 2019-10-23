import React from 'react';
import renderer from 'react-test-renderer';
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
    let component = renderer.create(<Product product={product} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});