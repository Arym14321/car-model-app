import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCarComponent } from './edit-car.component';
import { MatDialogModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: EditCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),MatDialogModule],
  exports: [RouterModule]
})
export class EditCarRoutingModule { }
