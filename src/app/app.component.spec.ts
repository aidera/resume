import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ActionsComponent } from './components/actions/actions.component';
import { SectionsComponent } from './components/sections/sections.component';
import { PrintItModalComponent } from './components/print-it-modal/print-it-modal.component';
import { ContactsComponent } from './components/sections/contacts/contacts.component';
import { EducationComponent } from './components/sections/education/education.component';
import { LastWordsComponent } from './components/sections/last-words/last-words.component';
import { PlacesOfWorkComponent } from './components/sections/places-of-work/places-of-work.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { SoftSkillsComponent } from './components/sections/soft-skills/soft-skills.component';
import { TechnicalSkillsComponent } from './components/sections/technical-skills/technical-skills.component';
import { HeaderDynamicComponent } from './components/header-dynamic/header-dynamic.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        HeaderDynamicComponent,
        SidebarComponent,
        ActionsComponent,
        SectionsComponent,
        PrintItModalComponent,
        ContactsComponent,
        EducationComponent,
        LastWordsComponent,
        PlacesOfWorkComponent,
        ProjectsComponent,
        SoftSkillsComponent,
        TechnicalSkillsComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
