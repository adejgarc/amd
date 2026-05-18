import { Component, input, output, signal, ViewChild } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';

type AmdButtonSeverity =
  // | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warn'
  | 'help'
  | 'danger'
  | 'contrast'
  | undefined;

@Component({
  selector: 'amd-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './amd-button.html',
  styleUrl: './amd-button.scss',
})
export class AmdButton {
  @ViewChild('internalBtn') pButtonComponent!: Button;
  customTokens = signal<any>(null); 

  label = input<string>('Button');
  severity = input<AmdButtonSeverity>(undefined);

  onClick = output<Event>();
}
