import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TippyModule } from 'ng-tippy';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TippyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
