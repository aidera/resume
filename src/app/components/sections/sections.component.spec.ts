import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsComponent } from './sections.component';
import { LastWordsComponent } from './last-words/last-words.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { PlacesOfWorkComponent } from './places-of-work/places-of-work.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';

describe('SectionsComponent', () => {
  let component: SectionsComponent;
  let fixture: ComponentFixture<SectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SectionsComponent,
        ContactsComponent,
        EducationComponent,
        LastWordsComponent,
        PlacesOfWorkComponent,
        ProjectsComponent,
        AboutMeComponent,
        SkillsComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
