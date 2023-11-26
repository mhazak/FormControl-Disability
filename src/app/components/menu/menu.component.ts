import { Component, OnInit } from '@angular/core';

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
