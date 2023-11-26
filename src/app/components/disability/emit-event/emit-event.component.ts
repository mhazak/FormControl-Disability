import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-emit-event',
  templateUrl: './emit-event.component.html',
  styleUrls: ['./emit-event.component.css'],
})
export class EmitEventComponent implements OnInit, OnDestroy {
  nameLog = '';
  surnameLog = '';
  destroy$ = new Subject<void>();

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
    this.nameControl.statusChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        console.log(val);
        this.nameLog += `\nSTATUS: ${val}`;
      });
    this.nameControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        console.log(val);
        this.nameLog += `\nVALUE: ${val}`;
      });

    this.surnameControl.statusChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        console.log(val);
        this.surnameLog += `\nSTATUS: ${val}`;
      });
    this.surnameControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        console.log(val);
        this.surnameLog += `\nVALUE: ${val}`;
      });
  }

  changeNameState() {
    this.nameControl.disabled
      ? this.nameControl.enable()
      : this.nameControl.disable();
  }

  changeSurnameState() {
    this.surnameControl.disabled
      ? this.surnameControl.enable({ emitEvent: false })
      : this.surnameControl.disable({ emitEvent: false });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
