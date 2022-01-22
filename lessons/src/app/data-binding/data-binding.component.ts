import { Component, Inject, Optional} from '@angular/core';
import { PayPalConfig } from '../models/paypal-config';
import { BookService } from '../services/book/book.service';
import { PayPalToken } from '../services/book/injectors';
import { CartService } from '../services/cart/cart.service';
import { LoggerService } from '../services/logger/logger.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent{
  title: string = 'test tittle';
  greeting: string = '';
  inputValue: string = '';
  show: boolean = true;
  list: string[] = ['Hello', 'world', '!']

  constructor(private bookService : BookService,
    @Inject(PayPalToken) private paypalConfig: PayPalConfig,
    private cartService: CartService,
    @Optional() private loggerService: LoggerService,
    ) { }
  sayHello()
  {
    this.greeting = 'Hello world!'
    console.log(this.bookService.getBooks())
    console.log('Paypal config',(this.paypalConfig))
    this.loggerService?.log('DataBindingComponent')
    this.cartService.addBook('book random');
    this.loggerService?.log(this.cartService.getBooks());


  }
  onChange(target: EventTarget | null)
  {
      this.inputValue = target ? (target as HTMLInputElement).value : ''
  }
  showValue(value: string): void {
    console.log('DataBindingComponent value', value)
  }
}
