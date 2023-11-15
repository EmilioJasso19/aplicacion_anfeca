import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Mi cuenta', url: '/cuenta', icon: 'person-circle' },
    { title: 'Servicios', url: '/servicios', icon: 'diamond' },
  ];

  constructor() {}
}
