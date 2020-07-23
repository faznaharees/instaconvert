import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun5',
  templateUrl: './fun5.component.html',
  styleUrls: ['./fun5.component.scss'],
})
export class Fun5Component implements OnInit {
 range=0
 result=0
  setQuantity1(value) {
    this.range = Number(value);
    this.calculate();
    
  }
 calculate(){
    this.result=(this.range-4)*100/16;
  }
  constructor() { }

  ngOnInit() {}

}
