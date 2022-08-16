import {foodType} from '../models/foodType';

export const SET_FOOD_TYPES = 'SET_FOOD_TYPES';

export function setFoodTypes(foodTypes: foodType[]) {
  return {
    type: SET_FOOD_TYPES,
    payload: {
      foodTypes,
    },
  };
}
