import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, merge, takeUntil } from 'rxjs';

@Component({
  selector: 'app-only-self',
  templateUrl: './only-self.component.html',
  styleUrls: ['./only-self.component.scss'],
})
export class OnlySelfComponent implements OnInit {
  destroy$ = new Subject<void>();
  controlLogs = '';
  groupLogs = '';

  formGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
  });

  get nameControl() {
    return this.formGroup.controls.name;
  }

  get surnameControl() {
    return this.formGroup.controls.surname;
  }

  ngOnInit() {
    this.formGroup.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      console.log('FormGroup ValueChanges!');
      this.groupLogs += '\nChange Detected!';
    });

    merge(this.nameControl.valueChanges, this.surnameControl.valueChanges)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        console.log('FormControl ValueChanges!');
        this.controlLogs += '\nChange Detected!';
      });
  }

  changeNameState() {
    this.nameControl.disabled
      ? this.nameControl.enable()
      : this.nameControl.disable();
  }

  changeSurnameState() {
    this.surnameControl.disabled
      ? this.surnameControl.enable({ onlySelf: true })
      : this.surnameControl.disable({ onlySelf: true });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
