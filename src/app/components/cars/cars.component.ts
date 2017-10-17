import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../share/services/cars.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

	private cars: any[] = [];

	/*cars: Array<Object>;

  constructor(private carsService:CarsService) {
    this.cars = carsService.getCars();
  }*/

  constructor(private route: ActivatedRoute, private carService: CarsService) {
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

}
