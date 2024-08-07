import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from "../property-card/property-card.component";

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, PropertyCardComponent],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent {

  properties: Array<any> = [
    {
    "Id":1,
    "Type":"House",
    "Name": "Birla House",
    "Price":12000
    },
    {
    "Id":2,
    "Type":"House",
    "Name": "Erose Villa",
    "Price":15000
    },,
    {
    "Id":3,
    "Type":"House",
    "Name": "Marco House",
    "Price":13000
    },
    {
    "Id":4,
    "Type":"House",
    "Name": "Oakra House",
    "Price":22000
    },
    {
    "Id":5,
    "Type":"House",
    "Name": "Benjamin Outhouse",
    "Price":32000
    },
    {
    "Id":6,
    "Type":"House",
    "Name": "Monetary House",
    "Price":12000
    },
    {
    "Id":7,
    "Type":"House",
    "Name": "Hawai",
    "Price":12000
    },
    {
    "Id":8,
    "Type":"House",
    "Name": "Kutb Sanchury House",
    "Price":12000
    },
    {
    "Id":9,
    "Type":"House",
    "Name": "Shanti Mahal",
    "Price":12000
    },
    {
    "Id":10,
    "Type":"House",
    "Name": "Hillcrest Residency",
    "Price":12900
    }
        
  ]


}
