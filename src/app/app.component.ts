import { Component } from '@angular/core';
import { routerTransition } from './nav/router.animations';

@Component({
  selector: 'app-root',
  animations: [routerTransition], // implements the page transitions from router.animations
  template: `
    <main [@routerTransition]="getState(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>
  `
})

export class AppComponent {

  // retrieves the data state from the route, noted in routes.ts
  // matches the retrieved state to the corresponding state in routerTransition in order to apply its specified animation
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
