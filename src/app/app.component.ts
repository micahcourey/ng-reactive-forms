import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  testForm: FormGroup;
  userRoles: any[];

  constructor() {
    this.title = 'ng-reactive-forms example';
    this.testForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      user_role: new FormControl(null, [])
    });
    this.userRoles = [
      { 'value': 1, 'name': 'Administrator' },
      { 'value': 2, 'name': 'Editor' },
      { 'value': 3, 'name': 'Contributor' },
      { 'value': 4, 'name': 'Authenticated User' }
    ];
  }



}
