import { Injectable } from '@angular/core';
import { AvailabilityComponent } from './availability/availability.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDatesService {
  private dateSource = new BehaviorSubject([]);
  dates = this.dateSource.asObservable();
  constructor() { }
  
  changeDates(dates: Array<string>) {
    this.dateSource.next(dates);
  }

}