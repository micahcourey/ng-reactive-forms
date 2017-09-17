import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ValidationService {

  validationMessages: {};

  constructor() {
    this.validationMessages = {
      name: { 
        required: 'Name is required', 
      },
      email: {
        required: 'Email address is required',
        email: 'Please input a valid email address'
      } 
    };
  }

  formErrorGenerator(formGroup: FormGroup, key: string) {
    var formError: string;
    if (!formGroup) { return; }
    const control = formGroup.get(key);
    if (control && control.dirty && !control.valid) {
      const messages = this.validationMessages[key];
      for (const key in control.errors) {
        formError = messages[key] + ' ';
        console.log(formError)
      }
    }
    return formError;
  };

}
