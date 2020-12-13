import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SkillsComponent } from './skills.component';
import { skills, skillTypes } from '../../../data/skills';

describe('SkillsComponent', () => {
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

  it('should display categories', () => {
    component.skillTypes = skillTypes;
    component.skills = skills;
    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('.skills-group'))
      .nativeElement;

    expect(element.textContent).toContain(skillTypes[0].title.ru);
  });

  it('should display skills', () => {
    component.skillTypes = skillTypes;
    component.skills = skills;
    fixture.detectChanges();

    const skillElement = fixture.debugElement.query(
      By.css('.skills-list .skill:first-child')
    ).nativeElement;
    expect(component).toBeTruthy(skillElement);
  });
});
