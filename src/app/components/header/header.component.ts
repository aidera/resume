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
    window.addEventListener('scroll', (e) => {
      this.backgroundParallaxScroll();
    });
  }

  ngAfterViewInit(): void {
    this.backgroundParallaxScroll();
  }

  backgroundParallaxScroll(): void {
    if (this.backgroundParallaxRef) {
      this.backgroundParallaxRef.nativeElement.style.top =
        window.scrollY * this.parallaxMultiplier + 'px';
    }
  }
}
