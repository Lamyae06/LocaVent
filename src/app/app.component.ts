import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
//import { SliderComponent } from './components/slider/slider.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-navbar></app-navbar>
   <!-- <app-slider></app-slider> -->
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  imports: [NavbarComponent, FooterComponent, /*SliderComponent,*/ RouterOutlet]
})
export class AppComponent { }
