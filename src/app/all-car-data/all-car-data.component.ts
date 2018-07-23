import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../car-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-car-data',
  templateUrl: './all-car-data.component.html',
  styleUrls: ['./all-car-data.component.css']
})
export class AllCarDataComponent implements OnInit {
  carData: any = [];
  errorMsg: String;
  constructor(private service: CarDataService, private router: Router) {
    this.service.allCarData().subscribe(res => {
      this.carData = res
    })
  }

  ngOnInit() {
   

  }
  add() {
    this.router.navigate(['/add-car'])
  }
  delete(carId) {
    this.service.deleteCaraData(carId).subscribe(res => {
      console.log('res ', res);
      if(res.status === 200){
        this.service.allCarData().subscribe(res => {
          this.carData = res
        })
      }
    })
  }
  edit(carId, carName, carModel) {
    this.router.navigate(['/edit-car', { carId: carId }]);
  }
}
