import { Component, OnInit } from '@angular/core';
import {
  CHANGE_TRIGGER_PAGE_URL,
  INIT_PAGE_URL,
  EMIT_EVENT_PAGE_URL,
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
      icon: 'pi pi-fw pi-file',
      expanded: true,
      items: [
        {
          label: 'Init',
          icon: 'pi pi-fw pi-trash',
          routerLink: INIT_PAGE_URL,
        },
        {
          label: 'Change Trigger',
          icon: 'pi pi-fw pi-external-link',
          routerLink: CHANGE_TRIGGER_PAGE_URL,
        },
        {
          label: 'Emit Event',
          icon: 'pi pi-fw pi-external-link',
          routerLink: EMIT_EVENT_PAGE_URL,
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
