import { Component } from '@angular/core';

@Component({
  selector: 'app-lift',
  templateUrl: './lift.component.html',
  styleUrls: ['./lift.component.css']
})
export class LiftComponent {
  currentFloor: number = 0;

  getFloor() {
    for (let i = 1; i <= 10; i++) {
      
      // Delay the loop to visualize the changes
      setTimeout(() => {this.currentFloor = i;}, 1000 * i);
    }
  }

}
