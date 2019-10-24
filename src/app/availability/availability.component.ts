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
  dateVerifier() {
    if(this.check_in_date === undefined){
      return "Please enter the check-in date.";
    } else if(this.check_out_date === undefined) {
      return "Please enter the check-out date.";
    } else{
      let check_in_date = new Date(this.check_in_date);
      let check_out_date = new Date(this.check_out_date);
      let diff = Math.floor((Date.UTC(check_out_date.getFullYear(), check_out_date.getMonth(), check_out_date.getDate()) - Date.UTC(check_in_date.getFullYear(), check_in_date.getMonth(), check_in_date.getDate()) ) /(1000 * 60 * 60 * 24));
      if(diff < 0){
        return "Check-out date cannot be earlier than check-in date.";
      } else if(diff === 0) {
        return "Check-out date and check-in date cannot be the same."
      } else{
        return 'ok';
      }
    }
  }
  check() {
    let dateVerif = this.dateVerifier();
    if(dateVerif !== 'ok'){
      alert(dateVerif);
    } else {
        let date = new Date();
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