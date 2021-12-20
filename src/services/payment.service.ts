import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../environments/environment';
import { Payment } from '../interfaces/Payment';

// const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  constructor() { }

  // getAllPayment(){

  // 	return this.http.get(`${apiUrl}/payments`);
  	
  // }

  listPayment: Payment[] = []

  getPayment() {
    return this.listPayment.slice();
  }

  addPayment(payment: Payment) {
    this.listPayment.push(payment)

  }
}
