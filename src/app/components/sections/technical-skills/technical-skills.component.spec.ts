import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSkillsComponent } from './technical-skills.component';
import { techSkills } from '../../../data/skills';
import { By } from '@angular/platform-browser';

describe('TechnicalSkillsComponent', () => {
  let component: TechnicalSkillsComponent;
  let fixture: ComponentFixture<TechnicalSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechnicalSkillsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: should display categories test
  // it('should display categories', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should display skills', () => {
    component.skills = techSkills;
    fixture.detectChanges();

    const skillElement = fixture.debugElement.query(
      By.css('.skills-list .skill:first-child')
    ).nativeElement;
    expect(component).toBeTruthy(skillElement);
  });
});
