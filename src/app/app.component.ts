import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  testForm: FormGroup;
  

  constructor() {
    this.title = 'app works!';
    this.testForm = new FormGroup({
      name: new FormControl('', []),
      email: new FormControl('', [])
    });
  }

}
