import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ScheduleModule } from './ui/schedule/schedule.module';
import { FrmBtn } from './ui/form/frmBtn.component';
import { FrmTitle } from './ui/form/frmTitle.component';

import { NavbarComponent } from './navbar/navbar.component';
import { ProcbarComponent } from './procbar/procbar.component';

import { GenlistComponent } from './ui/genlist/genlist.component';
import { PersonxForm } from './ui/form/person-form.component';
import { ScheduleProxy } from './ui/schedule/schedule.proxy';

import { PostForm } from './ui/form/post/form.component';
import { CommuneForm } from './ui/form/commune/form.component';
import { EducationForm } from './ui/form/education/form.component';
import { StatementForm } from './ui/form/statement/form.component';
import { CitizenshipForm } from './ui/form/citizenship/form.component';
import { PersonForm } from './ui/form/person/form.component';

import { SDKModule } from './shared/sdk/index';

import { RouterModule } from '@angular/router';

import { ValuesPipe, KeysPipe } from './shared/valuesPipe';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'genlist/:id', component: GenlistComponent },
      { path: 'person', component: PersonxForm },
      { path: 'form/post/:id/:action', component: PostForm },
      { path: 'form/post', component: PostForm },
      { path: 'form/commune/:id/:action', component: CommuneForm },
      { path: 'form/commune', component: CommuneForm },
      { path: 'form/education/:id/:action', component: EducationForm },
      { path: 'form/education', component: EducationForm },
      { path: 'form/statement/:id/:action', component: StatementForm },
      { path: 'form/statement', component: StatementForm },
      { path: 'form/citizenship/:id/:action', component: CitizenshipForm },
      { path: 'form/citizenship', component: CitizenshipForm },
      { path: 'form/person/:id/:action', component: PersonForm },
      { path: 'form/person', component: PersonForm },      
      { path: 'schedule/:view', component: ScheduleProxy },
      { path: '', component: ProcbarComponent },
    ]), SDKModule.forRoot(),
    ReactiveFormsModule, ScheduleModule],
  declarations: [
    AppComponent, NavbarComponent, ProcbarComponent, GenlistComponent, ValuesPipe, KeysPipe, PersonForm, PostForm, 
    CommuneForm, EducationForm, StatementForm, CitizenshipForm, PersonForm, PersonxForm, ScheduleProxy, FrmBtn, FrmTitle],
  bootstrap: [AppComponent]
})
export class AppModule { }
