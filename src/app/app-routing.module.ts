import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material';
import { AllCarDataComponent } from './all-car-data/all-car-data.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'all-car-data',
    loadChildren: './all-car-data/all-car-data.module#AllCarDataModule'
  },
  {
    path: 'add-car',
    loadChildren: './add-car/add-car.module#AddCarModule'
  },
  {
    path: 'edit-car/:carId',
    loadChildren: './edit-car/edit-car.module#EditCarModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatDialogModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
