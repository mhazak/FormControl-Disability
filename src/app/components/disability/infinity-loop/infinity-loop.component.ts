import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-infinity-loop',
  templateUrl: './infinity-loop.component.html',
  styleUrls: ['./infinity-loop.component.css'],
})
export class InfinityLoopComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();

  formGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    username: new FormControl(''),
  });

  get usernameControl() {
    return this.formGroup.controls.username;
  }

  constructor(private messageService: MessageService) {}
  ngOnInit() {
    this.formGroup.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ name, surname }) => {
        try {
          this.usernameControl.setValue(`${name ? name + '.' : ''}${surname}`);
        } catch (e) {
          this.messageService.add({
            severity: 'error',
            summary: 'RangeError',
          });
          console.error(e);
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
