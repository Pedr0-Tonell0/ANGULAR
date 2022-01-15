import { Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent{
  title: string = 'test tittle';
  greeting: string = '';
  inputValue: string = '';
  show: boolean = true;
  list: string[] = ['Hello', 'world', '!']

  constructor() { }
  sayHello()
  {
    this.greeting = 'Hello world!'
  }
  onChange(target: EventTarget | null)
  {
      this.inputValue = target ? (target as HTMLInputElement).value : ''
  }
  showValue(value: string): void {
    console.log('DataBindingComponent value', value)
  }
}
