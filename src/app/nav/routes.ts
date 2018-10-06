import { Routes } from '@angular/router';
import { GradientsComponent, PresetsComponent, ColorsComponent } from '../pages/index';
import { Error404Component } from '../pages/404/404.component';

export const appRoutes: Routes = [
    { path: 'gradients', component: GradientsComponent, data: { state: 'gradients' } },
    { path: 'presets', component: PresetsComponent, data: { state: 'presets' } },
    { path: 'colors', component: ColorsComponent, data: { state: 'colors' } },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/gradients', pathMatch: 'full'},
    { path: '**', redirectTo: '/404' },
];
