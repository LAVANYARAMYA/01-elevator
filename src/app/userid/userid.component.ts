import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-userid',
  templateUrl: './userid.component.html',
  styleUrls: ['./userid.component.css']
})
export class UseridComponent {
  @Output() buttonClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  ontoggleDoor()
  {
    this.buttonClicked.emit(true);

   
  }
}
