import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('backgroundParallaxRef') backgroundParallaxRef: ElementRef;
  parallaxMultiplier = 0.4;

  constructor() {}

  ngOnInit(): void {
    this.backgroundParallaxScroll();
  }

  ngAfterViewInit(): void {
    const layoutContent = document.querySelector('.layout-content');
    if (layoutContent) {
      document
        .querySelector('.layout-content')
        .addEventListener('scroll', (e) => {
          this.backgroundParallaxScroll();
        });
      this.backgroundParallaxScroll();
    }
  }

  backgroundParallaxScroll(): void {
    if (this.backgroundParallaxRef) {
      this.backgroundParallaxRef.nativeElement.style.top =
        (document.querySelector('.layout-content') as HTMLElement).scrollTop *
          this.parallaxMultiplier +
        'px';
    }
  }
}
