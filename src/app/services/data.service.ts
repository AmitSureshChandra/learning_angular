import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {logger} from 'codelyzer/util/logger';
import 'rxjs/Rx';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getData(){
    return this.http.get('/data.json').map(
      v => v.json()
    )
  }
}
