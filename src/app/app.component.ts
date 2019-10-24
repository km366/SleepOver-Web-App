import { Component } from '@angular/core';
import { UserDatesService } from './UserDates.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserDatesService]
})
export class AppComponent {
  title = 'SleepOver-app';
}
