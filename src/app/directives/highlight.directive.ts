import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[highlight]',

})
export class highlight implements OnInit {
    constructor() { }
    @Input('highlight') colorin: string = 'red'


    @HostBinding('style.backgroundColor') bg: string = 'darkred'
    @HostBinding('style.color') color: string = this.colorin;

    @HostListener('mouseenter') enter() {
        // this.render.setStyle(this.element.nativeElement, 'background-color', 'orange')
        // this.render.setStyle(this.element.nativeElement, 'color', 'blue')
        this.color = 'black'
        this.bg = 'white'
    }

    @HostListener('mouseleave') leave() {
        // this.render.setStyle(this.element.nativeElement, 'background-color', 'red')
        // this.render.setStyle(this.element.nativeElement, 'color', 'white')
        this.bg = 'red'
    }

    ngOnInit(): void {
        this.colorin = this.bg;

    }
}