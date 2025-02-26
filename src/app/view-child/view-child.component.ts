import { Component } from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: false,
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  childText : string = "Child default string";

  changeText(){
    this.childText= "Updated string by viewChild";
  }
  
}
