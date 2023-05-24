import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class EventEmitterService {
  onCloseLeftSidebar: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
}
