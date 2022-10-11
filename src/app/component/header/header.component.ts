import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  items: MenuItem[] = [
    { label: 'Trader Timer Zone', icon: 'pi pi-fw pi-clock', routerLink: '/timer-zone' },
    { label: 'Lista Confluência', icon: 'pi pi-fw pi-list', routerLink: '/lista-confluencia' }
  ];;
  ngOnInit(): void {
  }

}
