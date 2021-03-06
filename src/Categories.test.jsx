import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../fixture/test-data';

describe('Categories', () => {
  const handleClick = jest.fn();

  const renderCategories = (categoryId) => render((
    <Categories
      categories={categories}
      categoryId={categoryId}
      onClick={handleClick}
    />
  ));

  beforeEach(() => {
    handleClick.mockClear();
  });

  it('renders categories buttons', () => {
    const { getByText } = renderCategories();

    categories.forEach((cateogory) => {
      expect(getByText(RegExp(cateogory.name))).not.toBeNull();
    });
  });

  context('when button is clicked', () => {
    it('handleClick is called', () => {
      const { getByText } = renderCategories();

      fireEvent.click(getByText(categories[0].name));

      expect(handleClick).toBeCalled();
    });
  });

  context('when category is selected', () => {
    it('render V sign on the clicked button', () => {
      const { getByText } = renderCategories(1);

      expect(getByText(/V/)).not.toBeNull();
    });
  });

  context('when nothing is selected', () => {
    it('does not render V sign on all buttons', () => {
      const { queryByText } = renderCategories(undefined);

      expect(queryByText(/V/)).toBeNull();
    });
  });
});
