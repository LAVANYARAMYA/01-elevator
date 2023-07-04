import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LiftComponent } from './lift/lift.component';
import { LiftOneComponent } from './lift-one/lift-one.component';
import { DoorOpenCloseComponent } from './door-open-close/door-open-close.component';

@NgModule({
  declarations: [
    AppComponent,
    // LiftComponent,
    LiftOneComponent,
    DoorOpenCloseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
