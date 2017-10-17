import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Car } from '../models/car.model';
import { Router } from '@angular/router';


@Injectable()
export class CarsService {

	 

  constructor(private router: Router, private http: HttpClient) { 
  	
  }

  /*private cars: Car[] = [
    {
      id: 1,
      mark: "Opel",  
      model: "Astra",
      year: 1991,
      maxSpeed: 250,
      isAutomatic: true,
      engine:"I4", 
      numberOfDoors: 5
    },
    {
      id: 2,
      mark: "Opel",  
      model: "Kadett",
      year: 1937,
      maxSpeed: 200,
      isAutomatic: false,
      engine:"1,074 cc sv I4", 
      numberOfDoors: 5
    },
    {
      id: 3,
      mark: "Ford",  
      model: "Focus",
      year: 1998,
      maxSpeed: 245,
      isAutomatic: false,
      engine:"5.0 L Ford Coyote V8", 
      numberOfDoors: 5
    }
   
  ];

  getCars(){
    return this.cars;
  }*/
  

  public getCars()
  {
  	return this.http.get<any[]>('http://localhost:8000/cars.php');
  }

  public addCar(id, mark, model, year, maxSpeed, isAutomatic, engine, numberOfDoors){

  	this.router.navigate(['/cars']);


  	return this.http.post(


  		'http://localhost:8000/cars.php', {

  			id: id,
      		mark: mark,  
      		model: model,
      		year: year,
      		maxSpeed: maxSpeed,
      		isAutomatic: isAutomatic,
      		engine: engine, 
      		numberOfDoors: numberOfDoors
  		}

  	);



  }

}
