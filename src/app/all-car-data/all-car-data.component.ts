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
  constructor(private service: CarDataService, private router: Router) {
  }

  ngOnInit() {
    this.service.allCarData().subscribe(res => {
      this.carData = res
    })
  }

  add() {
    this.router.navigate(['/add-car'])
  }

  delete(carId) {
    this.service.deleteCaraData(carId).subscribe(res => {
      if(res.status === 200){
        this.service.allCarData().subscribe(res => {
          this.carData = res
        })
      }
    })
  }
  
  edit(carId) {
    this.router.navigate(['/edit-car',carId]);
  }
}
