import React from 'react';
import PropTypes from 'prop-types';
import { pluralise } from '../utils';

const Title = (props) => (
  <h1 className="title">
    {props.heading}{' '}
    {props.totalItems > 0 &&
      <span className="title__total">{`${props.totalItems} Item${pluralise(props.totalItems)}`}</span>
    }
  </h1>
);

Title.propTypes = {
  totalItems: PropTypes.number,
  heading: PropTypes.string
};

export default Title;

