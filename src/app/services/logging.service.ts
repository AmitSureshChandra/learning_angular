import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {

  log(){
    console.log('Log Service Called')
  }
  constructor() { }
}
