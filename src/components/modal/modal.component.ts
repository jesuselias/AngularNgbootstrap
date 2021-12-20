import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { addPay } from 'src/app/stateStore/pay.actions';
import { PaymentForm } from 'src/interfaces/PaymentForm';
// import { PaymentService } from 'src/services/payment.service';
import { Payment } from '../../interfaces/Payment';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [
    {
      provide: PaymentForm,
      useClass: PaymentForm
    }
  ]
})

export class Modal implements OnInit {

  public form: FormGroup = this.paymnetForm.formGroupBase;
  myItems: Payment[] = new Array();
  newItem: any = {};
  btnSave:boolean = false;
  btnContinue:boolean = true;
  valorTotal:number = 500;
  valorPen:number=0;
  pay:any;

  modalReference!: NgbModalRef;

  closeResult!: string;

  constructor(
    // private fb: FormBuilder,
    // private router: Router,
    // private _paymentService: PaymentService,
    private store:Store,
    private paymnetForm: PaymentForm,
  ) {

  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit(): void {
    
  }


  public selectPayType: any = [
    {
      name: 'Credit Card',
    },
    {
      name: 'Cash',
    }
  ];

  AddItem() { 
    console.log(this.form)
    this.myItems.push(    
      this.newItem
    );
    this.pay = this.newItem     
    this.newItem = {};
    console.log(this.myItems);
      let sum = 0;
      let count = 0;
      
      this.myItems.forEach((data:any,)=>{
      sum += parseInt(data.value);
    })

    console.log('sum',sum)
    this.valorPen = this.valorTotal - sum; 
    ;
     if(this.valorPen <= 0){
      this.valorPen = 0
     } else {
      this.btnContinue = false
     }

      
    
  }

  edit(data:any,id:any){
    console.log(data)
    console.log('i',id)
    this.paymnetForm.Id= id
    this.paymnetForm.TypePay = data.typePay
    this.paymnetForm.Value = data.value
    console.log("prueba", this.paymnetForm.Value)
    this.btnSave = true
  }

  EditItem() {
    let id = this.paymnetForm.Id
    var dataPayment: any = {
      id: this.paymnetForm.Id,
      typePay: this.paymnetForm.TypePay,
      value: this.paymnetForm.Value, 
    }
    console.log(dataPayment)
    this.myItems.indexOf(dataPayment.id) 
    {
      this.myItems.splice( dataPayment.id, 1, 
        dataPayment    
      );  
    };    
    dataPayment = {};
    console.log(this.myItems);
    this.btnSave = false
  }

  delete(id:any){
    console.log('i',id)
    this.myItems.splice(id, 1);
  }

  continue(){
    console.log(this.pay)
    var payment = this.pay
    this.store.dispatch(addPay(payment))
    // this.modalReference.close();
  }

  close():void {
    // this.modalReference.close();
  }


}
