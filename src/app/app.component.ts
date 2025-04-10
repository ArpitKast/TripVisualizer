import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { TripListComponent } from './trip-list/trip-list.component';

@Component({
     selector: 'app-root',
     standalone: true,
     imports: [TripListComponent],  // 👈 This is required!
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css'],
   })
export class AppComponent {
  title = 'trip-visualizer';
}
