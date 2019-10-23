import React, { Fragment, useState, useEffect } from 'react';
import Title from './title';
import ProductGrid from './product-grid/product-grid';
import Filters from './filters/filters';
import { getLastLabel } from '../utils';
import { API_URL } from '../constants';

export default function ProductListing() {
  const [isLoading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [facets, setFacets] = useState([]);
  const [total, setTotal] = useState(0);
  const [title, setTitle] = useState('');

  async function fetchData () {
    try {
      const res = await fetch(API_URL, { method: 'GET' });
      const resData = await res.json();

      setProducts(await resData.catalogEntryView);
      setFacets(await resData.facetView);
      setTotal(await resData.recordSetTotalMatches);
      setTitle(getLastLabel(await resData.breadCrumbTrailEntryView));
      setLoading(false);
    } catch(err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="product-listing">
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        <Fragment>
          {title && <Title heading={title} totalItems={total} />}
          <Filters facets={facets} />
          <ProductGrid products={products} />
        </Fragment>
      }
    </div>
  )
};