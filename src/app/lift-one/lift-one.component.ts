import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { delay } from 'rxjs';
//import { DoorOpenCloseComponent } from '../door-open-close/door-open-close.component';


@Component({
  selector: 'app-lift-one',
  templateUrl: './lift-one.component.html',
  styleUrls: ['./lift-one.component.css'],
})
export default class LiftOneComponent {

  currentFloor: number = 1; // Initial floor
  totalFloors: number = 4; // Total number of floors
  isReached:boolean=false;

  //constructor(private doorcomp: DoorOpenCloseComponent){}
  

  goToFloor(floor: number) {

    
  
    if (this.currentFloor <= floor) {
      for (let i = this.currentFloor; i <= floor; i++) {
        //this.currentFloor = i;
        //console.log("*****",this.currentFloor);
       setTimeout(() => {this.currentFloor = i;
        if (i === floor) {
          this.isReached = true;
        }}, 1000 * i);
      // console.log(this.currentFloor);
    

        
      }
      this.isReached=false;
      
      

    } else {
      var j=1;
      for (let i = this.currentFloor; i >= floor; i--) {
       // this.currentFloor = i;
        //console.log("*****",this.currentFloor);
        setTimeout(() => {this.currentFloor = i;
          if (i === floor) {
            this.isReached = true;
          }}, 1000 *(j++));
        //console.log(this.currentFloor);
      }
      this.isReached=false;
    }
   // console.log(this.currentFloor);
  }

  isOpen: any;

  toggleDoor(Open:boolean){
    // console.log("****",Open);
    // this.isOpen = Open;
    // console.log(this.isOpen);
  }

  onButtonClicked(eventData: boolean) {
    //console.log('Button clicked event:', eventData);
    // Handle the event data here
    this.isOpen=eventData;
  }

  ontoggleDoor(eventData: boolean)
  {
    this.isOpen=eventData;
  }


  
 

 
}
