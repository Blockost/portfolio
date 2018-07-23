import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {
  private readonly SCROLL_OPTIONS: ScrollIntoViewOptions = {
    block: 'start',
    inline: 'nearest',
    behavior: 'smooth'
  };
  @Input() private targetElement!: string;

  constructor() {}

  @HostListener('click')
  click() {
    const element = document.querySelector(this.targetElement) as HTMLElement;
    if (element != null) {
      element.scrollIntoView(this.SCROLL_OPTIONS);
    }
  }
}
