import { FormControl, FormGroup, Validators } from "@angular/forms";

export class PaymentForm {

    public formGroupBase: FormGroup = new FormGroup({
        _id: new FormControl({ value: null, disabled: false }),
        _typePay: new FormControl({ value: null, disabled: false }),
        _value: new FormControl({ value: null, disabled: false }),
       
    })

    public get Id() {
        return this.formGroupBase.get("_id")?.value;
    }

    public set Id(value: number) {
        this.formGroupBase.get("_id")?.setValue(value);
    }

    public get TypePay() {
        return this.formGroupBase.get("_typePay")?.value;
    }

    public set TypePay(value: string) {
        this.formGroupBase.get("_typePay")?.setValue(value);
    }

    public get Value() {
        return this.formGroupBase.get("_value")?.value;
    }

    public set Value(value: number) {
        this.formGroupBase.get("_value")?.setValue(value);
    }


}