import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-change-trigger',
  templateUrl: './change-trigger.component.html',
  styleUrls: ['./change-trigger.component.css'],
})
export class ChangeTriggerComponent implements OnInit, OnDestroy {
  log = '';
  destroy$ = new Subject<void>();
  formGroup = new FormGroup({
    name: new FormControl(''),
  });

  get nameControl() {
    return this.formGroup.controls.name;
  }
  constructor() {}

  ngOnInit() {
    this.nameControl.statusChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        console.log(val);
        this.log += `\nSTATUS: ${val}`;
      });
    this.nameControl.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe((val) => {
        console.log(val);
        this.log += `\nVALUE: ${val}`;
      });
  }

  disable() {
    this.nameControl.disable();
  }

  enable() {
    this.nameControl.enable();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
