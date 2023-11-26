import { Component, OnInit } from '@angular/core';
import { INIT_PAGE_URL } from 'src/app/app-routing.module';

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
          label: 'Export',
          icon: 'pi pi-fw pi-external-link',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
