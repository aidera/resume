import {
  Component,
  ElementRef,
  ViewChild,
  Renderer2,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { Locale } from '../../models/Locale';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() isStatic = false;
  @Output() buttonCLicked = new EventEmitter();

  @ViewChild('sidebar') sidebarRef: ElementRef;
  @ViewChild('languagePanel') languagePanelRef: ElementRef;

  isOpen = false;

  currentLocale: Locale = 'en';

  constructor(private render: Renderer2) {}

  ngOnInit(): void {
    this.isOpen = this.isStatic;
  }

  onMouseEnter(): void {
    this.isOpen = true;
  }

  onMouseLeave(): void {
    this.isOpen = this.isStatic;
  }

  onButtonClicked(): void {
    this.buttonCLicked.emit();
  }

  changeLanguage(localeToSet: Locale): void {
    this.onButtonClicked();
    if (this.currentLocale !== localeToSet) {
      const currentLocaleElement = this.languagePanelRef.nativeElement.querySelector(
        `.${this.currentLocale}`
      );
      const localeToSetElement = this.languagePanelRef.nativeElement.querySelector(
        `.${localeToSet}`
      );
      const localeToSetElementLeft = localeToSetElement.offsetLeft;

      this.render.setStyle(
        currentLocaleElement,
        'left',
        localeToSetElementLeft + 'px'
      );
      this.render.removeClass(currentLocaleElement, 'disabled');

      this.render.setStyle(localeToSetElement, 'left', '0px');
      this.render.addClass(localeToSetElement, 'disabled');

      this.currentLocale = localeToSet;
    }
  }
}
