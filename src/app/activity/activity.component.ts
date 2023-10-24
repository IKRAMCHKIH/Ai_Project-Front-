import { Component } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent {
  activity: any = {};

  onSubmit() {
    // Handle form submission here, e.g., post the new activity to a server
    console.log('Submitted activity:', this.activity);
  }
}