import React from 'react';
import PropTypes from 'prop-types';

import { ROOT_URL } from '../../constants';

const Product = ({ product }) => (
  <div className="product">
    <a href="/">
      <img className="product__image" src={`${ROOT_URL}${product.thumbnail}`} alt={product.name} />
      <h2 className="product__name">{product.name}</h2>
      <p className="product__price">{`$${product.price[0].value}`}</p>
    </a>
  </div>
);

Product.propTypes = {
  name: PropTypes.string,
  price: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
    })
  ),
  thumbnail: PropTypes.string,
};

export default Product;