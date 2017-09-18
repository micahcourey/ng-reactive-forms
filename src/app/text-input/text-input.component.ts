import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from '../services/validation.service';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() inputName: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() value: any;
  @Input() type: string;
  @Input() optional: boolean;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;

  public formError;

  constructor(private _validationService: ValidationService) { 
      this.placeholder = "";
      this.inputName = 'name';
      this.optional = false;
  }

  ngOnInit() {
    this.formGroup.valueChanges.debounceTime(500).subscribe(() => {
      this.formError = this._validationService.formErrorGenerator(this.formGroup, this.inputName);
    })
    this.formError = this._validationService.formErrorGenerator(this.formGroup, this.inputName);
  }
}
