import { Component } from '@angular/core';
import {map, startWith} from 'rxjs/operators';
import {combineLatest, Observable, of} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Rick and Morty';
  
}
