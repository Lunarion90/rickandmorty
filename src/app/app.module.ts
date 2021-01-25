import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { CharListComponent } from './components/char-list/char-list.component';
import { CharDetailsComponent } from './components/char-details/char-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    CharListComponent,
    CharDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
