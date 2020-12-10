import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillsComponent } from './soft-skills.component';
import { softSkills } from '../../../data/skills';
import { By } from '@angular/platform-browser';

describe('SoftSkillsComponent', () => {
  let component: SoftSkillsComponent;
  let fixture: ComponentFixture<SoftSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SoftSkillsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display skills', () => {
    component.skills = softSkills;
    fixture.detectChanges();

    const skillElement = fixture.debugElement.query(
      By.css('.skills-list .skill:first-child')
    ).nativeElement;
    expect(component).toBeTruthy(skillElement);
  });
});
