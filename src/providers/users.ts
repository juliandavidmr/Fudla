import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Users provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Users {

  constructor(public http: Http) {
    console.log('Hello Users Provider');
  }

  public getListUser() {
    return new Promise((resolve, reject) => {
      this.http.get('http://200.21.7.94/food/api/servicios/get_almuerzos').map(res => res.json())
        .subscribe((data: any = []) => {

          resolve(data);
        });
    })
  }
}
