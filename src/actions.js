import {
  fetchRegions, fetchCategories, fetchRestaurants,
} from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function selectRegion(regionName) {
  return {
    type: 'selectRegion',
    payload: {
      regionName,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function selectCategory(categoryId) {
  return {
    type: 'selectCategory',
    payload: {
      categoryId,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { regionName, categoryId } = getState();

    if (regionName && categoryId) {
      const restaurants = await fetchRestaurants({
        regionName, categoryId,
      });

      dispatch(setRestaurants(restaurants));
    }
  };
}
