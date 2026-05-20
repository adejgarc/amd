import { Directive, OnInit, Optional, ElementRef } from "@angular/core";
import { Andromeda } from "../../styles/andromeda-config";
import { AmdButton } from "../components/amd-button/amd-button";

@Directive({
    selector: 'amd-button[sm], amd-button[m], amd-button[l], amd-button[xl], amd-button[andromeda]',
    standalone: true
})
export class AndromedaStyleDirective implements OnInit {

    constructor(
        @Optional() private host: AmdButton,
        private el: ElementRef
    ) { }

    ngOnInit() {
        this.applyStyles();
    }

    private applyStyles() {
        if (!this.host) return;

        const availableStyles = ['sm', 'm', 'l', 'xl', 'andromeda'];
        const activeStyle = availableStyles.find(style =>
            this.el.nativeElement.hasAttribute(style)
        ) || 'm';

        const config = Andromeda as any;
        try {
            const sizeData = config.semantic.spacing.button[activeStyle];
            const rootTokens: any = {};
            const primaryTokens: any = {};

            Object.keys(sizeData).forEach(key => {
                if (key.toLowerCase().includes('background') || key.toLowerCase().includes('color')) {
                    primaryTokens[key] = sizeData[key];
                } else {
                    rootTokens[key] = sizeData[key];
                }
            });

            this.host.customTokens.set({
                root: {
                    ...rootTokens,
                    primary: primaryTokens,
                    secondary: primaryTokens
                }
            });

        } catch (e) {
        }
    }

    private applyStylesOLD() {
        if (!this.host) return;


        const availableStyles = ['sm', 'm', 'l', 'xl', 'andromeda'];
        const activeStyle = availableStyles.find(style =>
            this.el.nativeElement.hasAttribute(style)
        ) || 'm';

        const config = Andromeda as any;
        try {
            const sizeData = config.semantic.spacing.button[activeStyle];
            const rootTokens: any = {};
            Object.keys(sizeData).forEach(key => {
                rootTokens[key] = sizeData[key];
            });
            this.host.customTokens.set({
                root: rootTokens
            });
            // this.host.customTokens.set({
            //     root: {
            //         paddingX: sizeData.paddingX,
            //         paddingY: sizeData.paddingY,
            //         fontSize: sizeData.fontSize,
            //         borderRadius: sizeData.borderRadius,
            //     }
            // });

        } catch (e) {

        }
    }
}
