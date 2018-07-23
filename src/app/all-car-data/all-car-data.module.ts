import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCarDataComponent } from './all-car-data.component';
import { RouterModule } from '@angular/router';
import { AllCarDataRoutingModule } from './all-car-data-routing.module';
import { CarDataService } from '../car-data.service';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AllCarDataRoutingModule,
    HttpModule
  ],
  declarations: [AllCarDataComponent],
  providers: [CarDataService],
})
export class AllCarDataModule { }
