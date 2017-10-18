import { Component, Input, EventEmitter, Output, SimpleChange } from '@angular/core';
import { Car } from '../../../share/models/car.model';

@Component({
  selector: '[carRow]',
  templateUrl: 'car-row.component.html'
})
export class CarRowComponent {
  private car: Car;
  private oldIndex: number;

  @Input()
  set carRow(car: Car) {
    this.car = car;
  }
  @Input() index: number;

  @Output() onEdit = new EventEmitter<Car>();
  @Output() onRemove = new EventEmitter<Car>();

  constructor() {
  }

  ngOnChanges(changes: {[index: string]: SimpleChange}) {
    if (changes.index.previousValue) {
      this.oldIndex = changes.index.previousValue;
    }
  }

  edit(car: Car) {
    this.onEdit.emit(car);
  }

  remove(car: Car) {
    this.onRemove.emit(car);
  }

}
