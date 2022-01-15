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

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    BookComponent,
    HighlightDirective,
    FormsComponent,
    TemplateDriverFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
