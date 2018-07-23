import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Headers, Response, RequestOptions } from '@angular/http'
@Injectable()
export class CarDataService {
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });
  tempData: any = [];
  constructor(private http: Http) { }
  url = './assets/json-data/car_data.json';

  allCarData() {
    return this.http.get('http://localhost:5555/car-data')
    .map(this.extractData)
    // .catch(this.handleError)

  }
  getDataOnId(carId) {
    const url = `${"http://localhost:5555/car-data"}/${carId}`;
    return this.http.get(url)
    .map(this.extractData)

  }
  editCarData(carId, data) {
    const url = `${"http://localhost:5555/car-data"}/${carId}`;
    return this.http.put(url, JSON.stringify(data), this.options);
  }
  deleteCaraData(carId) {
    const url = `${"http://localhost:5555/car-data"}/${carId}`;
    return this.http.delete(url, this.options)

  }
  addCarData(bodyData) {
    return this.http.post('http://localhost:5555/car-data', bodyData)
    .map(this.extractData)
    // .catch(this.handleError)
  }
  extractData(res: Response | any) {
    const body = res.json();
    return body || {};
  }
  handleError(error: Response | any) {
  if(error.status === 0){
    console.error(error);
    return Observable.throw("Server is Shutdown please try once again!");
  }
  }
}
