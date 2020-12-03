import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';

import { Locale } from '../../models/Locale';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @ViewChild('languagePanel') languagePanel: ElementRef;

  currentLocale: Locale = 'en';
  isOpen = false;

  constructor(private render: Renderer2) {}

  changeLanguage(localeToSet: Locale): void {
    if (this.currentLocale !== localeToSet) {
      const currentLocaleElement = this.languagePanel.nativeElement.querySelector(
        `.${this.currentLocale}`
      );
      const localeToSetElement = this.languagePanel.nativeElement.querySelector(
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
