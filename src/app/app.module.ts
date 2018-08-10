import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TippyModule } from './modules/tippy/tippy.module';

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
