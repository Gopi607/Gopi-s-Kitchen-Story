import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imgWidth="500";
  imgHeight="500"
   order(){
     alert("You need to login first...");
   }
  constructor() { }

  ngOnInit(): void {
  }

}