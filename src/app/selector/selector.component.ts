import { Component, OnChanges, DoCheck, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnChanges, DoCheck {
  @Input() formGroup: FormGroup;
  @Input() inputName: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() options;
  @Input() classes: string;
  @Input() labelClasses: string;

  public formError;
  public placeholderText: boolean;

  constructor(private _validationService: ValidationService) { 
      this.placeholder = '';
      this.inputName = 'name';
      this.classes = '';
      this.labelClasses = '';
  }

  ngOnChanges() {
    this.formGroup.valueChanges.debounceTime(500).subscribe(() => {
      this.formError = this._validationService.formErrorGenerator(this.formGroup, this.inputName);
    })
    this.formError = this._validationService.formErrorGenerator(this.formGroup, this.inputName);   
  }

  ngDoCheck() {
    if (this.formGroup && this.formGroup.get(this.inputName).value == null) {
      this.placeholderText = this.formGroup.get(this.inputName).pristine;
    } else {
      this.placeholderText = false;
    }
  }

}






