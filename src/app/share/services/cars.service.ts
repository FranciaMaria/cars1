import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable()
export class CarsService {

  constructor() { }

  private cars: Car[] = [
    {
      id: 1,
      mark: "Opel",  
      model: "Astra",
      year: 1991,
      maxSpeed:"250 km/h",
      isAutomatic: true,
      engine:"I4", 
      numberOfDoors: 5
    },
    {
      id: 2,
      mark: "Opel",  
      model: "Kadett",
      year: 1937,
      maxSpeed:"87 mph",
      isAutomatic: false,
      engine:"1,074 cc sv I4", 
      numberOfDoors: 5
    },
    {
      id: 3,
      mark: "Ford",  
      model: "Focus",
      year: 1998,
      maxSpeed:"245 km/h",
      isAutomatic: false,
      engine:"5.0 L Ford Coyote V8", 
      numberOfDoors: 5
    }
   
  ];

  getCars(){
    return this.cars;
  }

}
