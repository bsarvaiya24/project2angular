import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetsTableComponent } from './pets-table/pets-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manager_dashboard', component: ManagerDashboardComponent },
  { path: 'virtual_pets', component: PetsTableComponent },
  { path: 'virtual_pets/:id', component: PetDetailsComponent },
  { path: 'dashboard', component: PetsTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
