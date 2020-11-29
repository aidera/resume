import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientModule, InlineSVGModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a name', () => {
    const element = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(element.textContent).toContain('Евгения Михалева');
  });

  it('should display a speciality', () => {
    const element = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(element.textContent).toContain('Frontend Developer');
  });

  it('should display an email', () => {
    const element = fixture.debugElement.query(
      By.css('.actions .contacts .email')
    ).nativeElement;
    expect(element.textContent).toContain('hope.aidera@gmail.com');
  });

  it('should display a phone', () => {
    const element = fixture.debugElement.query(
      By.css('.actions .contacts .phone')
    ).nativeElement;
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
