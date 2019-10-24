import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserDatesService } from '../UserDates.service';
import { AngularFireDatabase, AngularFireList }from 'angularfire2/database';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  cust_name:string;
  dates: Array<string>
  cust_email: string;
  cust_phone: string;
  cust_dorm: string;
  check_in_date: string; 
  check_out_date: string;
  //drop_time: string;
  //pick_time: string;
  add_info: string;

  constructor(private router: Router,
    private datesService: UserDatesService,
    public db: AngularFireDatabase) {
      this.dates = new Array<string>(2);
     }

  ngOnInit() { 
    this.datesService.dates.subscribe((dates) => {
  this.dates = dates;
    });
    this.check_in_date = this.dates[0];
    this.check_out_date = this.dates[1];
  }
  
  checkEmpty() {
    if (this.cust_name === undefined || this.cust_email === undefined || this.cust_phone === undefined || this.cust_dorm === "empty" || this.check_in_date === undefined || this.check_out_date === undefined/* || this.drop_time === "empty" || this.pick_time === "empty"*/) {
      alert("Please fill all the required fields!");
    }
    else {
      let data = {
        name: this.cust_name,
        check_in: this.check_in_date,
        check_out: this.check_out_date,
        email: this.cust_email,
        mattress_id: "3"
      };
      this.db.object('bookings/1').set(data).then(_ => console.log('Data set'));
      this.router.navigate(['/', 'confirmation']).then(nav=> {
        console.log(nav);
      }, err => {
        console.log(err);
      });
    }  
  }
}
