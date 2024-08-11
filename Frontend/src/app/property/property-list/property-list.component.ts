import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from "../property-card/property-card.component";
import { HousingService } from '../../services/housing.service';
import { error } from 'console';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, PropertyCardComponent],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

  properties: Array<IProperty> = [];
  //properties: any;

  constructor(private housingService: HousingService){}
  
  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
      data => {{
        this.properties = data;
        console.log(data);
      }
    });
  }
}