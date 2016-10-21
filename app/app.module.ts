import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ScheduleModule } from './ui/schedule/schedule.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProcbarComponent } from './procbar/procbar.component';

import { GenlistComponent } from './ui/genlist/genlist.component';
import { PersonForm } from './ui/form/person-form.component';
import { ScheduleProxy } from './ui/schedule/schedule.proxy';



import { RouterModule } from '@angular/router';

import { ValuesPipe, KeysPipe } from './shared/valuesPipe';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'genlist/:id', component: GenlistComponent },
      { path: 'person', component: PersonForm },
      { path: 'month', component: ScheduleProxy },
      { path: '', component: ProcbarComponent },
    ]),
    FormsModule, ReactiveFormsModule, ScheduleModule ],
  declarations: [AppComponent, NavbarComponent, ProcbarComponent, GenlistComponent, ValuesPipe, KeysPipe, PersonForm, ScheduleProxy ],
  bootstrap: [AppComponent]
})
export class AppModule { }
