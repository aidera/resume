import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderDynamicComponent } from './header-dynamic.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

describe('HeaderDynamicComponent', () => {
  let component: HeaderDynamicComponent;
  let fixture: ComponentFixture<HeaderDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderDynamicComponent, SidebarComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        InlineSVGModule.forRoot(),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open mobile menu if burger-menu clicked and close it by clicking on backdrop', () => {
    const openMenuTrigger = fixture.debugElement.query(
      By.css('.mobile-menu-trigger')
    ).nativeElement;
    expect(component.isMobileMenuOpen).toBeFalsy();

    openMenuTrigger.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.isMobileMenuOpen).toBeTruthy();

    const backdrop = fixture.debugElement.query(
      By.css('.mobile-menu__backdrop')
    ).nativeElement;
    backdrop.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();
    expect(component.isMobileMenuOpen).toBeFalsy();
  });

  it('should display a name', () => {
    const element = fixture.debugElement.nativeElement;
    expect(element.textContent).toContain('Евгения Михалева');
  });

  it('should display a speciality', () => {
    const element = fixture.debugElement.nativeElement;
    expect(element.textContent).toContain('Frontend Developer');
  });

  it('should display an email', () => {
    const element = fixture.debugElement.nativeElement;
    expect(element.textContent).toContain('hope.aidera@gmail.com');
  });

  it('should display a phone', () => {
    const element = fixture.debugElement.nativeElement;
    expect(element.textContent).toContain('+38 (068) 951-03-80');
  });

  it('should display a github link', () => {
    const element = fixture.debugElement.query(By.css('a[href*="github"]'))
      .nativeElement;
    expect(element.textContent).toBeDefined();
  });

  it('should display a linkedin link', () => {
    const element = fixture.debugElement.query(By.css('a[href*="linkedin"]'))
      .nativeElement;
    expect(element.textContent).toBeDefined();
  });

  it('should display a facebook link', () => {
    const element = fixture.debugElement.query(By.css('a[href*="facebook"]'))
      .nativeElement;
    expect(element.textContent).toBeDefined();
  });

  it('should display an instagram link', () => {
    const element = fixture.debugElement.query(By.css('a[href*="instagram"]'))
      .nativeElement;
    expect(element.textContent).toBeDefined();
  });
});
