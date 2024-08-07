import { Component } from "@angular/core";


@Component({
    selector: 'app-property-card',
    //template: '<h1>Hi, I am a property card</h1>',
    templateUrl: 'property-card.component.html',
    //styles: [`h1 {font-weight: normal;}`],
    styleUrls: ['property-card.component.css'],
    standalone: true
})
export class PropertyCardComponent {
    Property: any = {
        "Id":1,
        "Type":"House",
        "Name": "Birla House",
        "Price":12000
    }

}