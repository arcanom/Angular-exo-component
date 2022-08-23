import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfComponent } from './alert/conf/conf.component';
import { InfoComponent } from './alert/info/info.component';
import { ErrorComponent } from './alert/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfComponent,
    InfoComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
