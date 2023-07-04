import { Component } from '@angular/core';

@Component({
  selector: 'app-door-open-close',
  templateUrl: './door-open-close.component.html',
  styleUrls: ['./door-open-close.component.css']
})
export class DoorOpenCloseComponent {
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

}
