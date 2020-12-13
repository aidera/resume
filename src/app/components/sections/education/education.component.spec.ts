import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { EducationComponent } from './education.component';
import {
  certificates,
  courses,
  higherEducations,
} from '../../../data/education';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EducationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display higher education', () => {
    component.higherEducations = higherEducations;
    fixture.detectChanges();

    const educationElement = fixture.debugElement.query(
      By.css('.higher-education-list .education:first-child')
    ).nativeElement;
    expect(component).toBeTruthy(educationElement);
  });

  it('should display courses', () => {
    component.courses = courses;
    fixture.detectChanges();

    const educationElement = fixture.debugElement.query(
      By.css('.courses-list .education:first-child')
    ).nativeElement;
    expect(component).toBeTruthy(educationElement);
  });

  it('should display certificates', () => {
    component.certificates = certificates;
    fixture.detectChanges();

    const educationElement = fixture.debugElement.query(
      By.css('.certificates-list .education:first-child')
    ).nativeElement;
    expect(component).toBeTruthy(educationElement);
  });
});
