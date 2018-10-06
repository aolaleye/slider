import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './colors.component.html',
  styleUrls: ['../../shared/shared.style.css', './colors.component.css']
})
export class ColorsComponent {

  constructor(private router: Router) {}

    goBack() {
        this.router.navigate(['/presets']);
    }

}
