import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Car } from '../../../share/models/car.model';
import { CarsService } from '../../../share/services/cars.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  private cars: any[] = [];
  private newCar: Car = new Car();

   constructor(private route: ActivatedRoute, private carService: CarsService) {
    carService.getCars().subscribe(data => {
        this.cars = data;
      }, 

      (err: HttpErrorResponse) =>{
        alert('Something went wrong!');
        alert('Backend returned code ${err.status} with message: ${err.error}');
      });
  }

  addCar(car: Car) {
    this.newCar = new Car();
    this.carService.addCar(
      car.id, car.mark, car.model, car.year, car.maxSpeed, car.isAutomatic, car.engine, car.numberOfDoors
      ).subscribe(
        car => {
          this.cars.push(car);

        }
      );
  }

  ngOnInit() {

  }
}


