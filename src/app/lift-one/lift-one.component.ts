import { Component, Input, booleanAttribute } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-lift-one',
  templateUrl: './lift-one.component.html',
  styleUrls: ['./lift-one.component.css'],
})
export default class LiftOneComponent {

  
  currentFloor: number = 1; // Initial floor
  totalFloors: number = 4; // Total number of floors
  

  goToFloor(floor: number) {
  
    if (this.currentFloor <= floor) {
      for (let i = this.currentFloor; i <= floor; i++) {
        //this.currentFloor = i;
        //console.log("*****",this.currentFloor);
       setTimeout(() => {this.currentFloor = i;}, 1000 * i);
      // console.log(this.currentFloor);

        
      }
    } else {
      var j=1;
      for (let i = this.currentFloor; i >= floor; i--) {
       // this.currentFloor = i;
        //console.log("*****",this.currentFloor);
        setTimeout(() => {this.currentFloor = i;}, 1000 *(j++));
        //console.log(this.currentFloor);
      }
    }
   // console.log(this.currentFloor);
  }

  
 

 
}
