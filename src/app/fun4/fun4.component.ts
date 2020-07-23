import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun4',
  templateUrl: './fun4.component.html',
  styleUrls: ['./fun4.component.scss'],
})
export class Fun4Component implements OnInit {
 range=0
 result=0
  setQuantity1(value) {
    this.range = Number(value);
    this.calculate();
    
  }
 calculate(){
    this.result=((this.range-3)*100/12);
  }
  constructor() { }

  ngOnInit() {}

}
