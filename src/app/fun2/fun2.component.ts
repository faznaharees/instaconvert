import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun2',
  templateUrl: './fun2.component.html',
  styleUrls: ['./fun2.component.scss'],
})
export class Fun2Component implements OnInit {
 range=0
 result=0
  setQuantity1(value) {
    this.range = Number(value);
    this.calculate();
    
  }
 calculate(){
    this.result=this.range*5
  }
  constructor() { }

  ngOnInit() {}

}
