import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './gradients.component.html',
  styleUrls: ['../../shared/shared.style.css', './gradients.component.css']
})
export class GradientsComponent {

    constructor(private router: Router) {}

    goForward() {
        this.router.navigate(['/presets']);
    }
}
