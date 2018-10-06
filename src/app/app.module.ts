import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GradientsComponent, PresetsComponent, ColorsComponent, Error404Component} from './pages/index';
import { appRoutes } from './nav/routes';
import 'hammerjs';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    GradientsComponent,
    PresetsComponent,
    ColorsComponent,
    Error404Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
