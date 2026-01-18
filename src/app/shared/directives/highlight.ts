import { Directive, ElementRef, HostListener, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

 
  private readonly  el = inject(ElementRef);
  private readonly  renderer2 = inject(Renderer2);


  // ngAfterViewInit(): void {
  //   this.el.nativeElement.style.color = 'red';
    
  // }
  @HostListener('mouseenter')
  mouseEnter():void{
    this.addStyle('red');
  }
  @HostListener('mouseleave')
  mouseLeave():void{
    this.addStyle('')
  }

  addStyle(color:string):void{

        // this.el.nativeElement.style.color = color;

        this.renderer2.setStyle(this.el.nativeElement, 'background-color', color);

  }
}
