import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AddCarRoutingModule } from './add-car-routing.module';
import { RouterModule } from '@angular/router';
import { AddCarComponent } from './add-car.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule,MatButtonModule} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { CarDataService } from '../car-data.service';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    AddCarRoutingModule,
    RouterModule, 
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    HttpModule
  ],
  declarations: [AddCarComponent,],
  providers: [CarDataService]
})
export class AddCarModule { }
