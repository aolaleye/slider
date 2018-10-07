import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GradientsComponent, PresetsComponent, ColorsComponent, Error404Component} from './pages/index';
import { AppRouting } from './nav/routes';
import 'hammerjs';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting
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
