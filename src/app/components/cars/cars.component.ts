import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Injector } from '@angular/core';
import { CarsService } from '../../share/services/cars.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Car } from '../../share/models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
/*export class CarsComponent implements OnInit {

	private cars: any[] = [];

	/*cars: Array<Object>;

  constructor(private carsService:CarsService) {
    this.cars = carsService.getCars();
  }*/

/*  constructor(private route: ActivatedRoute, private carService: CarsService) {
    carService.getCars().subscribe(data => {
        this.cars = data;
      }, 

      (err: HttpErrorResponse) =>{
        alert('Something went wrong!');
        alert('Backend returned code ${err.status} with message: ${err.error}');
      });
  }

  ngOnInit() {
  }

}*/

export class CarsComponent {

  private cars: any[] = [];
  private filter: String = '';
  private carService : CarsService;

  constructor(private injector: Injector) {
    this.carService = this.injector.get(CarsService);
    this.carService.getCars().subscribe(
      data => {
        this.cars = data;
      },
      (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
      }
    );
  }

  remove(car) {
    this.carService.removeCar(car)
        .subscribe(
          (car: Car) => {
            const index = this.cars.indexOf(car);
            this.cars.splice(index, 1);
          }
        );
  }

  submitCar(car: Car) {
    if (car.id) {
      this.carService.editCar(car)
        .subscribe(
          (car: Car) => {
            let existing = this.cars.filter(c => c.id == car.id);
            if (existing.length) {
              Object.assign(existing[0], car);
            }
          }
        );
    } else {
      this.carService.addCar(car)
        .subscribe(
          car => {
            this.cars.push(car);
          }
        );
    }
  }

}

