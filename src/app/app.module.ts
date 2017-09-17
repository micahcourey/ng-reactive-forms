import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ValidationService } from './services/validation.service';

import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input/text-input.component';
import { SelectorComponent } from './selector/selector.component';
import { ErrorTextComponent } from './error-text/error-text.component';


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    SelectorComponent,
    ErrorTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	  ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ValidationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
