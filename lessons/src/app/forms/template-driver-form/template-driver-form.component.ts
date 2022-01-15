import { Component, OnInit } from '@angular/core';
import { countries } from 'src/app/mock-data/countries';

interface MyModel {
  comment?:string;
  countryCode: string;
  age: number;
  gender: string;
  tc:boolean;
}

@Component({
  selector: 'app-template-driver-form',
  templateUrl: './template-driver-form.component.html',
  styleUrls: ['./template-driver-form.component.css']
})
export class TemplateDriverFormComponent implements OnInit {
  myModel: MyModel =  { countryCode: '', age: 0 , gender: '', tc:false};
  countries = countries;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formValue: any)
  {
    console.log(formValue);
    console.log(this.myModel);
    this.myModel.comment = 'test';
  }

}
