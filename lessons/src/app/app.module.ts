import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BookComponent } from './data-binding/book/book.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { TemplateDriverFormComponent } from './forms/template-driver-form/template-driver-form.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { BookService } from './services/book/book.service';
import { PayPalConfig } from './models/paypal-config';
import { PayPalToken } from './services/book/injectors';
import { LoggerService } from './services/logger/logger.service';
import {environment} from '../environments/environment'
import { SilentLoggerService } from './services/silent-logger/silent-logger.service';
import { CategoryComponent } from './data-binding/category/category.component';
import { FilterComponent } from './data-binding/filter/filter.component';

const payPalConfig: PayPalConfig = {
  clienteId: '123232',
  secretId: 'jdfdkfjdkf2',
  url: 'my-url'
}

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    BookComponent,
    HighlightDirective,
    FormsComponent,
    TemplateDriverFormComponent,
    ReactiveFormComponent,
    CategoryComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BookService,
  //{provide: BookService, useClass: BookService}
  {provide: PayPalToken, useValue: payPalConfig},
  {provide: LoggerService, useFactory: () =>{
      if(environment.production)
      {
        return new SilentLoggerService();
      }
      return new LoggerService();
  }

  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
