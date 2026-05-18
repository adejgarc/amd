import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.scss',
})
export class Badge {
  label = input('Default'); 
  color = input<'primary' | 'danger' | 'clear'>('primary');
}
