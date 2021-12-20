import { createReducer, on, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { Payment } from '../../interfaces/Payment'
import { addPay } from './pay.actions'

export const initialPay: Payment[] = [];

export const payReduce = createReducer(
    initialPay,

    on(addPay, (entries, pay) => {
        const entriesClone: Payment[] = JSON.parse(JSON.stringify(entries));
        console.log(pay)
        entriesClone.push(pay);
        return entriesClone;
      }),
)

export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
      if (action.type === INIT || action.type == UPDATE) {
        const storageValue = localStorage.getItem("state");
        if (storageValue) {
          try {
            return JSON.parse(storageValue);
          } catch {
            localStorage.removeItem("state");
          }
        }
      }
      const nextState = reducer(state, action);
      localStorage.setItem("state", JSON.stringify(nextState));
      return nextState;
    };
  };