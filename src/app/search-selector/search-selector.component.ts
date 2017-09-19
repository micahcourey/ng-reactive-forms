import { Component, OnInit, Input, OnChanges, HostListener, ElementRef, AfterContentChecked } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'search-selector',
  templateUrl: './search-selector.component.html',
  styleUrls: ['./search-selector.component.scss']
})
export class SearchSelectorComponent implements OnInit, OnChanges, AfterContentChecked {
  @Input() formGroup: FormGroup;
  @Input() inputName: string;
  @Input() inputTwoName: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() options;
  @Input() classes: string;
  @Input() labelClasses: string;
  @Input() focus: boolean;

  public formError;
  public open: boolean;
  public currentlySelected;
  public searchText: string;
  public matchingOptions;
  private htmlElement: HTMLElement;
  private hasFocused = false;

  @HostListener('document: click', ['$event.target'])
    onClick(target) {
      let parentFound = false;
      while (target !== null && !parentFound) {
        if (target === this.element.nativeElement) {
          parentFound = true;
        }
        target = target.parentElement;
      }
      if (!parentFound) {
        this.open = false;
      }
  }

  constructor(private _validationService: ValidationService, protected element: ElementRef) { 
      this.placeholder = '';
      this.inputName = '';
      this.classes = '';
      this.labelClasses = '';
      this.open = false;
      this.searchText = ''
      this.htmlElement = element.nativeElement;
  }

  ngOnInit() {
    console.log('OnInit search dropdown')
    //this.formGroup.addControl(this.inputName, new FormControl(this.inputName))
    console.log('OnInit search dropdown after form control')
    this.matchingOptions = this.options;
  }

  ngOnChanges() {
    this.formGroup.valueChanges.debounceTime(500).subscribe(() => {
      this.formError = this._validationService.formErrorGenerator(this.formGroup, this.inputName);
    })
    this.formError = this._validationService.formErrorGenerator(this.formGroup, this.inputName);
    if (!this.formGroup.get(this.inputName)) {
      return;
    }
    let currentValue = this.formGroup.get(this.inputName).value
    if (this.inputTwoName) {
      let currentName = this.formGroup.get(this.inputTwoName).value
      this.currentlySelected = this.options.find((option) => {
        return option.value == currentValue && option.name == currentName;
      });
    } else {
      this.currentlySelected = this.options.find((option) => {
        return option.value == currentValue;
      })
    }
    if (this.currentlySelected) {
      this.placeholder = this.currentlySelected.name
    }
    console.log('currentlySelected', currentValue, this.currentlySelected)
  }

  ngAfterContentChecked() {
    this.giveFocus();
  }

  selected(option) {
    this.formGroup.get(this.inputName).markAsDirty();
    this.currentlySelected = option
    this.placeholder = option.name
    console.log('search dropdown', this.formGroup.get(this.inputName))
    this.formGroup.patchValue({[this.inputName]: option.value}, { emitEvent: false })
    if (this.inputTwoName) {
      this.formGroup.patchValue({[this.inputTwoName]: option.name}, { emitEvent: false })
    }
    this.open = false;
    this.searchText = '';
  }

  giveFocus() {
    // if (this.focus && !this.hasFocused) {
    //   this.htmlElement.focus();
    //   this.hasFocused = true;
    // }
  } 

  toggleDropdown() {
    if (this.open) {
      this.open = false
    }
    this.open = true;
  }



}
