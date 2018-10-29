import { Component } from '@angular/core';

@Component({
  selector: 'app-event-root',
  template: `
    <app-nav></app-nav>
   <router-outlet></router-outlet>
  `
})
export class EventAppComponent {
}
