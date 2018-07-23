import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CarDataService } from '../car-data.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css'],
})
export class EditCarComponent implements OnInit {
  carId: number;
  datas = {
    "carName": '',
    "carModel": '',
  }
  replaceData: any = [];
  constructor(private service: CarDataService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(res => {
      this.carId = parseInt(res.carId)
      this.service.getDataOnId(this.carId).subscribe(res => {
        this.replaceData = res;
        this.datas.carName = this.replaceData.carName;
        this.datas.carModel = this.replaceData.carModel;
      })

    })
  }

  ngOnInit() {

  }
  saveInfo() {

    this.service.editCarData(this.carId, this.datas).subscribe(res => {

    })
  }
}
