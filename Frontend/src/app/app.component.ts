import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Routes, RouterModule} from '@angular/router'

import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { app } from '../../server';
//import { HttpClientModule } from '@angular/common/http';

/*const appRoutes: Routes = [
  {path: '', component: PropertyListComponent},
  {path: 'add-property', component: AddPropertyComponent}
]*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            PropertyCardComponent,
            PropertyListComponent,
            NavBarComponent,
            AddPropertyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-first-ngApp';
}
