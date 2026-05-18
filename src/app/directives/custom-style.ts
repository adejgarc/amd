import { Directive, Input, OnChanges, Optional } from '@angular/core';
import { AmdButton } from '../components/amd-button/amd-button';
import { Andromeda } from '../../styles/andromeda-config';


@Directive({
  selector: '[amdSize]',
  standalone: true
})
export class CustomStyleDirective implements OnChanges {
  @Input('amdSize') sizeToken: string = 'm';

  constructor(private host: AmdButton) { }
  // constructor(@Optional() private host: AmdButton) { }


  // ngAfterViewInit() {

  //   setTimeout(() => this.applyStyles(), 0);
  // }

  ngOnChanges() {
    this.applyStyles();
  }

  private applyStyles() {
    if (!this.host || !this.sizeToken) return;

    const config = Andromeda as any;
    try {
        const sizeData = config.semantic.spacing.button[this.sizeToken];
        this.host.customTokens.set({
            root: {
                paddingX: sizeData.paddingX,
                paddingY: sizeData.paddingY,
                fontSize: sizeData.fontSize,
                borderRadius: sizeData.borderRadius,
            }
        });
        
    } catch (e) {
        console.error('Error al mapear tokens:', e);
    }
}

}
