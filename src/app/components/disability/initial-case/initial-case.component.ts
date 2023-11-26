import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-initial-case',
  templateUrl: './initial-case.component.html',
  styleUrls: ['./initial-case.component.css'],
})
export class InitialCaseComponent implements OnInit {
  formGroup = new FormGroup({
    name: new FormControl({ value: '', disabled: true }),
  });

  get nameControl() {
    return this.formGroup.controls.name;
  }
  constructor() {}

  ngOnInit() {}

  disable() {
    this.nameControl.disable();
  }

  enable() {
    this.nameControl.enable();
  }
}
