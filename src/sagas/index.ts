import {all, fork} from 'redux-saga/effects';

import {watchFetchAllergensProcess} from './allergens';
import {watchFetchFoodTypesProcess} from './foodTypes';
import {watchFetchIngredientsProcess} from './ingredients';
import {watchAddOrderProcess, watchFetchOrdersProcess} from './orders';
import {watchFetchPizzasProcess} from './pizzas';
import {watchFetchRecipesProcess} from './recipes';

export default function* rootSagas() {
  yield all([
    fork(watchFetchAllergensProcess),
    fork(watchFetchFoodTypesProcess),
    fork(watchFetchIngredientsProcess),
    fork(watchFetchOrdersProcess),
    fork(watchAddOrderProcess),
    fork(watchFetchPizzasProcess),
    fork(watchFetchRecipesProcess),
  ]);
}
