import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../../share/models/car.model';
import { CarsService } from '../../../share/services/cars.service';
//import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
/*export class CarFormComponent implements OnInit {

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

*/

export class CarFormComponent {
  @Output() onSubmit = new EventEmitter<Car>();

  private newCar: Car = new Car();

  constructor() {
  }

  submitCar(car: Car) {
    this.onSubmit.emit(car);
    this.newCar = new Car();
  }

  edit(car: Car) {
    this.newCar = Object.assign({}, car);
  }

  preview() {
    alert(`
      Mark: ${this.newCar.mark}\n
      Model: ${this.newCar.model}\n
      Year: ${this.newCar.year}\n
      Max Speed: ${this.newCar.maxSpeed}\n
      Automatic: ${this.newCar.isAutomatic}\n
      Engine: ${this.newCar.engine}\n
      Number of doors: ${this.newCar.numberOfDoors}
      `);
  }
}


