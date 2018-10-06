import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './presets.component.html',
  styleUrls: ['../../shared/shared.style.css', './presets.component.css']
})
export class PresetsComponent {

  constructor(private router: Router) {}

    goForward() {
      this.router.navigate(['/colors']);
    }

    goBack() {
      this.router.navigate(['/gradients']);
    }

}
