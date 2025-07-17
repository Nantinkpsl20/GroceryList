import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
 @Output() emitGrocery = new EventEmitter<string>();

 addNewGrocery(grocery: string){
  this.emitGrocery.emit(grocery);
 }
}
