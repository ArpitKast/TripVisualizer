import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Trip {
  start: string;
  end: string;
  level: number;
  arrow: boolean;
}

@Component({
     standalone: true,
     selector: 'app-trip-list',
     imports: [CommonModule, FormsModule],
     templateUrl: './trip-list.component.html',
     styleUrls: ['./trip-list.component.css']
   })
export class TripListComponent {
  startPoint = '';
  endPoint = '';

trips = [
     { start: 'BLR', end: 'MAA', level: 2, arrow: false, connected: true, color: '#6a5acd' },
     { start: 'MAA', end: 'HYD', level: 2, arrow: true, connected: true, color: '#007bff' },
     { start: 'BLR', end: 'HYD', level: 2, arrow: false, connected: false, color: '#f0ad4e' },
     { start: 'HYB', end: 'DEL', level: 1, arrow: false, connected: true, color: '#6a5acd' },
     { start: 'HYB', end: 'DEL', level: 1, arrow: false, connected: false, color: '#6a5acd' },
     { start: 'DEL', end: 'BLR', level: 2, arrow: false, connected: false, color: '#6a5acd' },
   ];
  generateZigzagPath(index: number, level: number): string {
     const x1 = index * 200 + 30;
     const y1 = level === 1 ? 50 : 100;
     const x2 = (index + 1) * 200;
     const y2 = level === 1 ? 100 : 50;
     const midX = (x1 + x2) / 2;
   
     return `M${x1},${y1} Q${midX},${y1 - 50} ${x2},${y2}`;
   }
}
