import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDatesService } from '../UserDates.service';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  check_in_date: string;
  check_out_date: string;
  dates: Array<string>
  constructor(private router: Router,
              private datesService: UserDatesService) {
    this.dates = new Array<string>(2);
               }

  ngOnInit() {
  }
  check() {
    if(this.check_in_date===undefined){
      alert("Please enter the check-in date.");
    } else if(this.check_out_date===undefined) {
      alert("Please enter the check-out date.")
    } else {
      let check_in_date_arr = new Array<string>(3);
      let check_out_date_arr = new Array<string>(3);
      check_in_date_arr = this.check_in_date.split('-');
      check_out_date_arr = this.check_out_date.split('-');
      if(parseInt(check_in_date_arr[0]) > parseInt(check_out_date_arr[0])){
        alert("Please re-check your dates!")
      } else if(parseInt(check_in_date_arr[0]) == parseInt(check_out_date_arr[0]) && parseInt(check_in_date_arr[1]) > parseInt(check_out_date_arr[1])) {
        alert("Please re-check your dates!");
      } else if (parseInt(check_in_date_arr[0]) == parseInt(check_out_date_arr[0]) && parseInt(check_in_date_arr[1]) == parseInt(check_out_date_arr[1]) && parseInt(check_in_date_arr[2]) > parseInt(check_out_date_arr[2])) {
        alert("Please re-check your dates!");
      } else {
        let new_dates = new Array<string>(2);
      this.dates[0] = this.check_in_date;
      this.dates[1] = this.check_out_date;
      setTimeout(() => {
        this.datesService.changeDates(this.dates);
        setTimeout(()=> {
          this.router.navigate(['/', 'booking']);
        }, 10);
      }, 10);
      }
      }
    
    
  }
}