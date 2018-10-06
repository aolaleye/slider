import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
    <div class="message">
        <h1>404'd</h1>
    <div>
    <button (click)="goBack()">Go Back</button>
    `,
    styleUrls: ['./404.component.css']
})

export class Error404Component {

    constructor(private router: Router) {}

    goBack() {
    this.router.navigate(['/gradients']);
    }

}
