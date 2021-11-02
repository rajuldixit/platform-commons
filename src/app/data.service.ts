import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getParentJSON() {
    return new Promise((resolve, reject) => {
      this.http.get('./../assets/json/parent.json').subscribe((resp : Array<{}>) => {
        if(resp) {
          let data = new Array();
          resp.forEach(r => {
            data.push(r);
          });
          resolve(data);
        } else {
          reject(resp);
        }
      });
    });
  }

  getChildJSON() {
    return new Promise((resolve, reject) => {
      this.http.get('./../assets/json/child.json').subscribe((resp : Array<{}>) => {
        if(resp) {
          let data = new Array();
          resp.forEach(r => {
            data.push(r);
          });
          resolve(data);
        } else {
          reject(resp);
        }
      });
    });
  }
}
