import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CharListComponent } from './char-list/char-list.component';
import { CharDetailsComponent } from './char-details/char-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CharListComponent,
    CharDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
