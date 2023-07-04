import { Component } from '@angular/core';

@Component({
  selector: 'app-door-open-close',
  templateUrl: './door-open-close.component.html',
  styleUrls: ['./door-open-close.component.css']
})
export class DoorOpenCloseComponent {
  isOpen: boolean = false;

  toggleDoor(): void {
    this.isOpen = !this.isOpen;
  }

}
