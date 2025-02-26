import { AfterViewInit, Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit,DoCheck {






  title = 'vttp5_csf_day03l';
  isShow: boolean = false;


  @ViewChild(ViewChildComponent) childComponent!: ViewChildComponent;
  @ViewChild("myImg") imageElement!: ElementRef;

  ngDoCheck(): void {
    console.log("DO CHECK");
  }
  ngOnInit(): void {
    this.isShow=true;
  }

  changeChildText() {
    this.childComponent.changeText();
    }

      
  ngAfterViewInit(): void {
    //this.isShow=true;
    console.log("AFTERVIEW init ....");
    console.log(this.imageElement);
  }
}
