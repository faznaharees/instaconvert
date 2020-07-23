import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun1',
  templateUrl: './fun1.component.html',
  styleUrls: ['./fun1.component.scss'],
})
export class Fun1Component implements OnInit {
  range = 0;
  rangeEnd=100;
  range25 = 25;
  range50 = 50;
  range75 =75
  setQuantity1(value) {
    this.range = Number(value);
    
  }
  setQuantity2(value) {
    this.rangeEnd = Number(value);
  }
  calculate(){
    this.range25 = (this.rangeEnd-this.range)/4 + this.range;
    this.range50 = (this.rangeEnd-this.range)/2 + this.range;
    this.range75 = 3*(this.rangeEnd-this.range)/4 + this.range;
  }
  constructor() { }

  ngOnInit() {
    this.calculate();
  }

}
