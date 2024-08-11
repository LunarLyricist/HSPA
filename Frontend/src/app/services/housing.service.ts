import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  getAllProperties(): Observable<IProperty[]> {
    return this.http.get<Array<IProperty>>('data/properties.json').pipe(
      map(data => data)
    );
  }
    /*return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
        //const dataObj = data as { [key: string]: any }; // Type assertion
        
        for(const id in data) {
          if(data.hasOwnProperty(id)) {
            propertiesArray.push(data);
          }
        }
        return propertiesArray;
      })
    )
  }*/
}
