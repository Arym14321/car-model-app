import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Headers, Response, RequestOptions } from '@angular/http'
@Injectable()
export class CarDataService {
  headers: Headers = new Headers({ 'Content-Type': 'application/json' });
  options: RequestOptions = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }

  allCarData() {
    return this.http.get('http://localhost:5555/car')
    .map(this.extractData)
  }

  getDataOnId(carId) {
    const url = `${'http://localhost:5555/car'}/${carId}`;
    return this.http.get(url)
    .map(this.extractData)
  }

  editCarData(carId, data) {
    const url = `${'http://localhost:5555/car'}/${carId}`;
    return this.http.put(url, JSON.stringify(data), this.options);
  }

  deleteCaraData(carId) {
    const url = `${'http://localhost:5555/car'}/${carId}`;
    return this.http.delete(url, this.options)
  }

  addCarData(bodyData) {
    return this.http.post('http://localhost:5555/car', bodyData)
    .map(this.extractData)
  }

  extractData(res: Response | any) {
    const body = res.json();
    return body || {};
  }
}
