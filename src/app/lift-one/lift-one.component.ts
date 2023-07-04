import { Component } from '@angular/core';

@Component({
  selector: 'app-lift-one',
  templateUrl: './lift-one.component.html',
  styleUrls: ['./lift-one.component.css']
})
export class LiftOneComponent {
  currentFloor: number = 1; // Initial floor
  totalFloors: number = 4; // Total number of floors

  goToFloor(floor: number) {
    console.log("enter");
    if (floor >= 1 && floor <= this.totalFloors) {
      this.currentFloor = floor;
    }
  }

  

}
