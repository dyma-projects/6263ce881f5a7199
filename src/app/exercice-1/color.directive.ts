import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el:ElementRef) { }

  @HostListener('window:keydown', ['$event']) windowKey($event:KeyboardEvent) {
    switch ($event.key) {
      case "ArrowRight":
        this.el.nativeElement.style.color = "#3498db";
        break;
      case "ArrowLeft":
          this.el.nativeElement.style.color = "#9b59b6";
          break;
      case "ArrowUp":
            this.el.nativeElement.style.color = "#e67e22";
            break;
      case "ArrowDown":
              this.el.nativeElement.style.color = "#bdc3c7";
              break;
      default:
        this.el.nativeElement.style.color = "black"
        break;
    }
  }
}
