import { Payment } from '../../interfaces/Payment'
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectCountProducts = createSelector(
    createFeatureSelector('payEntries'),
    (state: Payment[]) => {
        console.log(state)
      return state.length;
    }
  );