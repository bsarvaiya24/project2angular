import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetsTableComponent } from './pets-table/pets-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { AddPetComponent } from './add-pet/add-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { AdoptionRequestDetailsComponent } from './adoption-request-details/adoption-request-details.component';
import { ViewAllRequestsComponent } from './view-all-requests/view-all-requests.component';
import { ManagerViewAllPetsComponent } from './manager-view-all-pets/manager-view-all-pets.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'virtual_pets', component: PetsTableComponent },
  { path: 'virtual_pets/:id', component: PetDetailsComponent },
  { path: 'adoption_request_details/:id', component: AdoptionRequestDetailsComponent },
  { path: 'manager_dashboard', component: ManagerDashboardComponent },
  { path: 'view_all_pets', component: ManagerViewAllPetsComponent },
  { path: 'view_all_requests', component: ViewAllRequestsComponent },
  { path: 'add_pet', component: AddPetComponent },
  //TODO: put id path param for edit pet
  { path: 'pets/1/edit', component: EditPetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
