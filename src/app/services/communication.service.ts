import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  advancefilterpanel = new BehaviorSubject<any>(false)

  constructor() { }


}
