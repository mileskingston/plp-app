import { getLastLabel, pluralise, formatName } from './utils';

describe('getLastLabel', () => {
  it('returns last breadcrumb label', () => {
    const breadcrumbs = [{ label: "first" }, { label: "second" }, { label: "last" }];
    expect(getLastLabel(breadcrumbs)).toBe('last');
  });

  it('returns last breadcrumb label when only one value', () => {
    const breadcrumbs = [{ label: "last" }];
    expect(getLastLabel(breadcrumbs)).toBe('last');
  });
});

describe('pluralise', () => {
  it('returns "s" if greater than one', () => {
    expect(pluralise(2)).toBe('s');
  });

  it('returns nothing if not great than one', () => {
    expect(pluralise(1)).toBe('');
  });
});


describe('formatName', () => {
  it('returns Hello World', () => {
    expect(formatName('ProductItemName')).toEqual('Product Item Name');
  });

  it('returns Hello World', () => {
    expect(formatName('ProductItem_Name')).toEqual('Product Item Name');
  });
});