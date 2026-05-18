import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-simple-button',
  standalone: true,
  imports: [],
  templateUrl: './simple-button.html',
  styleUrl: './simple-button.scss',
})
export class SimpleButton {
  variant = input<'primary' | 'secondary' | 'danger' | 'clear'>('primary');
  disabled = input<boolean>(false);
  type = input<'button' | 'submit'>('button');

  clicked = output<MouseEvent>();

  handleInternalClick(event: MouseEvent) {
    if (!this.disabled()) {
      this.clicked.emit(event);
    }
  }
}
