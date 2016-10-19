import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProcbarComponent } from './procbar/procbar.component';

import { GenlistComponent } from './ui/genlist/genlist.component';
import { PersonForm } from './ui/form/person-form.component';



import { RouterModule } from '@angular/router';

import { ValuesPipe, KeysPipe } from './shared/valuesPipe';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'genlist/:id', component: GenlistComponent },
      { path: 'person', component: PersonForm },
      { path: '', component: ProcbarComponent },
    ]),
    FormsModule, ReactiveFormsModule ],
  declarations: [AppComponent, NavbarComponent, ProcbarComponent, GenlistComponent, ValuesPipe, KeysPipe, PersonForm ],
  bootstrap: [AppComponent]
})
export class AppModule { }
