import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validator, ValidatorFn, Validators } from '@angular/forms';
import { countries } from 'src/app/mock-data/countries';
import { idValidator } from 'src/app/validators/id-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formGroup: FormGroup;
  countries = countries;
  constructor() {

   }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      lastName: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      phoneNumber: new FormControl('',this.telephoneValidator(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
      )),id:new FormControl('',idValidator)
    })
  }

  OnSubmit()
  {
    console.log(this.formGroup.value);
  }

  telephoneValidator(phoneRegExp: RegExp): ValidatorFn{
   return (control: AbstractControl) : {[key: string]: any}| null => {
     const isValid = phoneRegExp ? phoneRegExp.test(control.value) : true;
     return !isValid ? {'InvalidphoneNumber': {value:control.value}} : null;
   }
  }

  get firstName(): AbstractControl | null{
    return  this.formGroup.get('firstName');
  }
  get id(): AbstractControl | null{
    return  this.formGroup.get('id');
  }
  get phoneNumber(): AbstractControl | null{
    return  this.formGroup.get('phoneNumber');
  }
}
