import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ValidationService } from './services/validation.service';

import { AppComponent } from './app.component';
import { TextInputComponent } from './text-input/text-input.component';
import { SelectorComponent } from './selector/selector.component';
import { ErrorTextComponent } from './error-text/error-text.component';
import { SearchSelectorComponent } from './search-selector/search-selector.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    SelectorComponent,
    ErrorTextComponent,
    SearchSelectorComponent,
    SearchFilterPipe
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
