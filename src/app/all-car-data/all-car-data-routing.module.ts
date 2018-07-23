import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllCarDataComponent } from './all-car-data.component';
const routes: Routes= [
  {
    path: '',
    component: AllCarDataComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCarDataRoutingModule { }
