import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MyPokemonService } from './my-pokemon.service';
import { NavbartopComponent } from './navbartop/navbartop.component';
import { PetsTableComponent } from './pets-table/pets-table.component';
import { AppRoutingModule } from './app-routing.module';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbartopComponent,
    PetsTableComponent,
    PetDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MyPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
