import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';


import {EventsListComponent,
        EventDetailsComponent,
        CreateEventComponent,
        EventThumbnailComponent} from './events-list/index';

import { EventAppComponent } from './event.app.component';
import { NavComponent } from './nav/nav.component';

import {appRoutes} from '../routes';
import { Error404Component } from './errors/error404.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes )
  ],
  providers: [
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
export function checkDirtyState ( component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
