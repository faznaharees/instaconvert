import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun3',
  templateUrl: './fun3.component.html',
  styleUrls: ['./fun3.component.scss'],
})
export class Fun3Component implements OnInit {
 range=0
 result=0
  setQuantity1(value) {
    this.range = Number(value);
    this.calculate();
    
  }
 calculate(){
    this.result=this.range*4
  }
  constructor() { }

  ngOnInit() {}

}
