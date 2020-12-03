import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [HttpClientModule, InlineSVGModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be opened on hover', () => {
    const sidebar = fixture.debugElement.query(By.css('#sidebar'))
      .nativeElement;
    expect(component.isOpen).toBeFalsy();

    sidebar.dispatchEvent(new MouseEvent('mouseover'));
    fixture.detectChanges();
    expect(component.isOpen).toBeTruthy();

    sidebar.dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();
    expect(component.isOpen).toBeFalsy();
  });

  it('should set clicked language', () => {
    const languagePanel = fixture.debugElement.query(By.css('.language-panel'))
      .nativeElement;
    const langEn = languagePanel.querySelector('.en');
    const langRu = languagePanel.querySelector('.ru');
    const langUa = languagePanel.querySelector('.ua');

    langEn.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.currentLocale).toBe('en');

    langRu.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.currentLocale).toBe('ru');

    langUa.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.currentLocale).toBe('ua');
  });

  // TODO: should set the language with Redux
  // TODO: should display all needed links
  // TODO: should react on current section
});
