import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { ProcbarComponent} from './procbar/procbar.component';

import { GenlistComponent} from './ui/genlist/genlist.component';



import { RouterModule }   from '@angular/router';

import { ValuesPipe, KeysPipe } from './shared/valuesPipe';

@NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: 'genlist/:id', component: GenlistComponent },
      { path: '', component: ProcbarComponent },
    ]) ],
  declarations: [ AppComponent, NavbarComponent, ProcbarComponent, GenlistComponent, ValuesPipe, KeysPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
