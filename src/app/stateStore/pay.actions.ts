
import { createAction,props } from '@ngrx/store';
import { Payment } from '../../interfaces/Payment'

export const addPay = createAction( 'save Pay', props<Payment>());