import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class SilentLoggerService extends LoggerService{
override log(value: any)
{

}
}
