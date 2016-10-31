import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ScheduleModule } from './ui/schedule/schedule.module';

import { NavbarComponent } from './navbar/navbar.component';
import { ProcbarComponent } from './procbar/procbar.component';

import { GenlistComponent } from './ui/genlist/genlist.component';
import { PersonForm } from './ui/form/person-form.component';
import { ScheduleProxy } from './ui/schedule/schedule.proxy';

import { PostForm } from './ui/form/post/form.component';
import { CommuneForm } from './ui/form/commune/form.component';

import { SDKModule } from './shared/sdk/index';

import { RouterModule } from '@angular/router';

import { ValuesPipe, KeysPipe } from './shared/valuesPipe';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'genlist/:id', component: GenlistComponent },
      { path: 'person', component: PersonForm },
      { path: 'form/post/:id', component: PostForm },
      { path: 'form/post', component: PostForm },
      { path: 'form/commune/:id', component: CommuneForm },
      { path: 'form/commune', component: CommuneForm },
      { path: 'schedule/:view', component: ScheduleProxy },
      { path: '', component: ProcbarComponent },
    ]), SDKModule.forRoot(),
    ReactiveFormsModule, ScheduleModule],
  declarations: [AppComponent, NavbarComponent, ProcbarComponent, GenlistComponent, ValuesPipe, KeysPipe, PersonForm, PostForm, CommuneForm, ScheduleProxy],
  bootstrap: [AppComponent]
})
export class AppModule { }
