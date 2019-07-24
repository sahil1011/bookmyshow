import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class DatabaseService {

   constructor(private http: Http) { }
   apiUrl = './assets/data.json';
   t = [];
   getData() {
      return this.http.get(this.apiUrl).pipe(map(res => res.json()));
   }
  
}

