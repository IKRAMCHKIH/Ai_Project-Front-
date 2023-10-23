import { Component } from '@angular/core';

@Component({
  selector: 'app-creat-activity',
  templateUrl: './creat-activity.component.html',
  styleUrls: ['./creat-activity.component.scss']
})
export class CreatActivityComponent {
  activity: any = {};

  onSubmit() {
    // Handle form submission here, e.g., post the new activity to a server
    console.log('Submitted activity:', this.activity);
  }
}
