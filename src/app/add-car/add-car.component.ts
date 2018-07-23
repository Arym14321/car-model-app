import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarDataService } from '../car-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  formGroup: FormGroup;
  carData: any=[];
  AllCarData: any;
  constructor(private formBuilder: FormBuilder,private service: CarDataService,private router: Router) { }
  datas: any;
  errorMsg: String;
  ngOnInit() {
    this.buildForm();
  }
  buildForm(): void {
    this.formGroup = this.formBuilder.group({
      id: ['', [Validators.required]],
      carName: ['', [Validators.required]],
      carModel: ['', [Validators.required]],
    });
  }
  saveData(data){
    console.log('data',data);
    this.service.addCarData(data).subscribe(res=>{})
  }

}
