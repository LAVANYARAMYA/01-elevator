import { Component } from '@angular/core';

@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.css']
})
export class LiftComponent {
  currentFloor: number = 1; // Initial floor
  totalFloors: number = 4; // Total number of floors

  goToFloor(floor: number) {
    if (floor >= 1 && floor <= this.totalFloors) {
      this.currentFloor = floor;
    }
  }

}
