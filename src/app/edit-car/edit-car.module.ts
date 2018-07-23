import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EditCarRoutingModule } from './edit-car-routing.module';
import { EditCarComponent } from './edit-car.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule,MatButtonModule,MatFormFieldModule, MatDialogModule} from '@angular/material';
import { CarDataService } from '../car-data.service';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    EditCarRoutingModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpModule
  ],
  declarations: [EditCarComponent],
  entryComponents: [EditCarComponent],
  providers: [CarDataService]
})
export class EditCarModule { }
