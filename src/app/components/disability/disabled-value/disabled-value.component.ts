import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-disabled-value',
  templateUrl: './disabled-value.component.html',
  styleUrls: ['./disabled-value.component.scss'],
})
export class DisabledValueComponent {
  destroy$ = new Subject<void>();

  formGroup = new FormGroup({
    name: new FormControl('Joe'),
    surname: new FormControl('Doe'),
  });

  get nameControl() {
    return this.formGroup.controls.name;
  }

  get surnameControl() {
    return this.formGroup.controls.surname;
  }

  changeNameState() {
    this.nameControl.disabled
      ? this.nameControl.enable()
      : this.nameControl.disable();
  }

  changeSurnameState() {
    this.surnameControl.disabled
      ? this.surnameControl.enable()
      : this.surnameControl.disable();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
