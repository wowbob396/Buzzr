import { Http ,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const proxy = "http://localhost:1337/";
/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  getApiUrl: string = proxy + "jsonplaceholder.typicode.com/posts";
  placeDetailsUrl: string = proxy + "https://maps.googleapis.com/maps/api/place/details/json?c35e8bff0ccf6ae27498074ec14b32dbe6638469"
  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }

  /**
   * This method uses the specified url and retrieves the data in JSON format
   */
  getPosts() {
    return this.http.get(this.getApiUrl)
    .do((res: Response) => console.log(res.json()))
    .map((res: Response ) => res.json())
    .catch((error: any) => {
      return Observable.throw(error);
    });
  }

  getPlacePhoto(placeId) {
    return this.http.get(this.placeDetailsUrl)
    .do((res: Response) => console.log(res.json()))
    .map((res: Response ) => res.json())
    .catch((error: any) => {
      return Observable.throw(error);
    });
  }
}
