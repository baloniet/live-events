import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { ProcbarComponent} from './procbar/procbar.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, NavbarComponent, ProcbarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
