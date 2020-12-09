import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';

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

// TODO: переместить потом в сервис translate
registerLocaleData(localeRu, 'ru');

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
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'ru',
    },
  ],
  // TODO: локализация date pipe
  // {
  //   provide: LOCALE_ID,
  //   deps: [SettingsService],      //some service handling global settings
  //   useFactory: (settingsService) => settingsService.getLanguage()  //returns locale string
  // }
  // это для локализации date pipe и возможность смены этого LOCALE_ID через любой сервис
  bootstrap: [AppComponent],
})
export class AppModule {}
