import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ProductListing from './product-listing';

describe('Product Listing Component', () => {
  let container = null;
  const repsonse = {
    breadCrumbTrailEntryView: [
      { label: "Electronics" },
      { label: "Tablets" }
    ],
    catalogEntryView: [{ 
        name: 'item',
        price: [{
          value: "300.0"
        }],
        thumbnail: '/image/url'
      },
      { 
        name: 'item 2',
        price: [{
          value: "20.0"
        }],
        thumbnail: '/image-2/url'
      }],
    facetView: [
      {
        value: "price_USD",
        name: "OfferPrice_USD",
        entry: [
          { label: "Name", value: "price_USD_Name", count: "2" },
          { label: "Name2", value: "price_USD_Name2", count: "2" },
        ],
      },
      {
        value: "mfName_ntk_cs",
        name: "ManufacturerName",
        entry: [
          { label: "Name", value: "mfName_ntk_cs_Name", count: "2" },
          { label: "Name2", value: "mfName_ntk_cs_Name2", count: "2" },
        ],
      }
    ],
    recordSetTotalMatches: 6,
  };

  beforeEach(() => {
    container = document.createElement("div");
    container.classList.add('test-wrapper');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders component before data loaded', () => {
    render(<ProductListing />, container);
    expect(container).toMatchSnapshot();
  });

  it('renders component with data', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(repsonse)
      })
    );

    await act(async () => {
      render(<ProductListing />, container);
    });

    expect(container).toMatchSnapshot();
    global.fetch.mockRestore();
  });

  it('renders component when an error', async () => {
    const error = 'Somethings gone wrong';

    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject({ error: error })
    );

    await act(async () => {
      render(<ProductListing />, container);
    });

    expect(container).toMatchSnapshot();
    global.fetch.mockRestore();
  });
});