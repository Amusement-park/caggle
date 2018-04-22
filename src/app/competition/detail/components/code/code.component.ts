import { Component, OnInit, Input} from '@angular/core';
import { routerTransition } from '../../../../router.animations';
import { Competition } from '../../../competition';
import { Car } from './domain/car';
import { CarService} from './services/carservice';

@Component({
  selector: 'navbar',
  // template: '{{ sliders | json }}',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
  providers: [CarService],
  animations: [routerTransition()]
})

export class CodeComponent implements OnInit {

    displayDialog: boolean;
    car: Car = new PrimeCar();
    selectedCar: Car;
    newCar: boolean;
    cars: Car[];
    cols: any[];
    property: string;
    value: number = 10;
    
    constructor(
      private carService: CarService, 
      ) {
    }
    
    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.property = "Hi";
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }
    
    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }
    
    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        } else {
            cars[this.findSelectedCarIndex()] = this.car;
        }
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }
    
    delete() {
        const index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val, i) => i != index);
        this.car = null;
        this.displayDialog = false;
    }
    
    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }
    
    cloneCar(c: Car): Car {
        const car = new PrimeCar();
        for (const prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }
    
    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}

export class PrimeCar implements Car {
    
    constructor(public vin?, public year?, public brand?, public color?) {}
}
