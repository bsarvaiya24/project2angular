import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { PetsTableComponent } from './pets-table/pets-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbartopComponent,
    PetsTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
