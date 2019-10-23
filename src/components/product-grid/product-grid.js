import React from 'react';
import PropTypes from 'prop-types';
import Product from './product';

const ProductGrid = ({ products }) => (
  <div className="product-grid">
    {products.length > 0 ?
      (products.map((product, index) => <Product key={index} product={product} />))
      : (<p>Sorry, no products</p>)
    }
  </div>
);

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

export default ProductGrid;