import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';


@Component({
    selector: 'app-login',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
   /* styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]*/
})
export class RegistrationComponent {

    valCheck: string[] = ['remember'];

    password!: string;

    constructor(public layoutService: LayoutService) { }
}