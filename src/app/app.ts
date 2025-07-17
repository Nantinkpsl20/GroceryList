import { Component } from '@angular/core';
import{Child} from './child/child';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [Child, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   groceryList =["Bananas", "Eggs", "Milk", "Bread", "Apples"];

   addGrocery(grocery:string){
    this.groceryList.push(grocery);
   }
}
