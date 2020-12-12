import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { techSkills } from '../../../data/skills';
import { By } from '@angular/platform-browser';

describe('TechnicalSkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
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
