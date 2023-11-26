import { Component, OnInit } from '@angular/core';
import {
  CHANGE_TRIGGER_PAGE_URL,
  INIT_PAGE_URL,
  EMIT_EVENT_PAGE_URL,
  INIFINTY_LOOP_PAGE_URL,
  DISABLED_VALUES_PAGE_URL,
  ONLY_SELF_PAGE_URL,
} from 'src/app/app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  items = [
    {
      label: 'Disability',
      expanded: true,
      items: [
        {
          label: 'Init',
          routerLink: INIT_PAGE_URL,
        },
        {
          label: 'Change Trigger',
          routerLink: CHANGE_TRIGGER_PAGE_URL,
        },
        {
          label: 'Emit Event',
          routerLink: EMIT_EVENT_PAGE_URL,
        },
        {
          label: 'Infinity loop',
          routerLink: INIFINTY_LOOP_PAGE_URL,
        },
        {
          label: 'Disabled values',
          routerLink: DISABLED_VALUES_PAGE_URL,
        },
        {
          label: 'Only self',
          routerLink: ONLY_SELF_PAGE_URL,
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
