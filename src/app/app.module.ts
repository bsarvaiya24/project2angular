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
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { AdoptionRequestDetailsComponent } from './adoption-request-details/adoption-request-details.component';
import { ViewAllRequestsComponent } from './view-all-requests/view-all-requests.component';
import { ManagerViewAllPetsComponent } from './manager-view-all-pets/manager-view-all-pets.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { OffcanvasComponent } from './offcanvas/offcanvas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbartopComponent,
    PetsTableComponent,
    PetDetailsComponent,
    DashboardComponent,
    ManagerDashboardComponent,
    AddPetComponent,
    AdoptionRequestDetailsComponent,
    ViewAllRequestsComponent,
    ManagerViewAllPetsComponent,
    EditPetComponent,
    OffcanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [MyPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
