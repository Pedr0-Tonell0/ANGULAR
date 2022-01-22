import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  log(value: any)
  {
    console.log('LoggerService', value);
  }
}
