import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TechnicalSkillsComponent } from './components/sections/technical-skills/technical-skills.component';
import { SoftSkillsComponent } from './components/sections/soft-skills/soft-skills.component';
import { EducationComponent } from './components/sections/education/education.component';
import { PlacesOfWorkComponent } from './components/sections/places-of-work/places-of-work.component';
import { ProjectsComponent } from './components/sections/projects/projects.component';
import { ContactsComponent } from './components/sections/contacts/contacts.component';
import { ActionsComponent } from './components/actions/actions.component';
import { LastWordsComponent } from './components/sections/last-words/last-words.component';
import { PrintItModalComponent } from './components/print-it-modal/print-it-modal.component';
import { SectionsComponent } from './components/sections/sections.component';
import { HeaderDynamicComponent } from './components/header-dynamic/header-dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TechnicalSkillsComponent,
    SoftSkillsComponent,
    EducationComponent,
    PlacesOfWorkComponent,
    ProjectsComponent,
    ContactsComponent,
    ActionsComponent,
    LastWordsComponent,
    PrintItModalComponent,
    SectionsComponent,
    HeaderDynamicComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
