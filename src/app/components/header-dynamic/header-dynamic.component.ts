import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { animate, style, trigger, transition } from '@angular/animations';

@Component({
  selector: 'app-header-dynamic',
  templateUrl: './header-dynamic.component.html',
  styleUrls: ['./header-dynamic.component.scss'],
  animations: [
    trigger('backdrop', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('250ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class HeaderDynamicComponent implements AfterViewInit {
  @ViewChild('headerDynamic') headerDynamicRef: ElementRef;
  @ViewChild('headerDynamicContainer') headerDynamicContainerRef: ElementRef;
  private currentScrollPosition = 0;
  public isMobileMenuOpen = false;

  constructor() {}

  ngAfterViewInit(): void {
    const layoutContent = document.querySelector('.layout-content');
    if (layoutContent) {
      this.scrollDynamicHeader(layoutContent.scrollTop);
      layoutContent.addEventListener('scroll', () => {
        this.scrollDynamicHeader(layoutContent.scrollTop);
      });
      window.addEventListener('resize', () => {
        this.scrollDynamicHeader(layoutContent.scrollTop);
      });
    }
  }

  scrollDynamicHeader(scrolled: number): void {
    this.headerDynamicRef.nativeElement.style.top = scrolled + 'px';

    const isMobile = window.innerWidth <= 767;
    const mainHeader = document.querySelector('header');

    if (mainHeader) {
      const mainHeaderHeight = mainHeader.getBoundingClientRect().height;

      if (isMobile) {
        if (scrolled > this.currentScrollPosition) {
          this.headerDynamicContainerRef.nativeElement.style.marginTop =
            -60 + 'px';
        } else {
          this.headerDynamicContainerRef.nativeElement.style.marginTop = '0';
        }
      } else {
        if (scrolled < mainHeaderHeight) {
          this.headerDynamicContainerRef.nativeElement.style.marginTop =
            -60 + 'px';
        } else {
          this.headerDynamicContainerRef.nativeElement.style.marginTop = '0';
        }
      }

      this.currentScrollPosition = scrolled;
    }
  }
}
