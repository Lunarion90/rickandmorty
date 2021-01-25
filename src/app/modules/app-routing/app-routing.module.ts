import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';
import { CharListComponent } from '../../components/char-list/char-list.component';
import { CharDetailsComponent } from '../../components/char-details/char-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mainpage' },
  { path: 'mainpage', component: MainMenuComponent },
  { path: 'characters', component: CharListComponent },
  { path: 'details', component: CharDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
