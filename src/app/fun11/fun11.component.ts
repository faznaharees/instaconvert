import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun11',
  templateUrl: './fun11.component.html',
  styleUrls: ['./fun11.component.scss'],
})
export class Fun11Component implements OnInit {
  select1='mpgUs'
  select2='mpgImp'
  range = 1
  result = 1000
  factor1 = 10
  factor2 = 1
 setQuantity1(value) {
   this.select1 = value;
   this.calculate(this.select1,this.select2);
   
 }
 setQuantity2(value) {
  this.select2 = value;
  this.calculate(this.select1,this.select2);
  
}
setQuantity3(value) {
  this.range = value;
  this.calculate(this.select1,this.select2);
  
}
setQuantity4(value) {
  this.result = value;
  this.calculate(this.select1,this.select2);
  
}
calculate(select1,select2){
            this.factor1 = this.switchfn(this.select1,this.factor1)                                                               
            this.factor2 = this.switchfn(this.select2,this.factor2)                                                               
            this.result = this.range*this.factor1/this.factor2
}

switchfn(select,factor){
  switch(select){
    case 'mpgUs':{factor = 1
                  break;}
    case 'mpgImp':{factor = 1000
                    break;}
    case 'kmLiter':{factor =1000000
                      break;}
    case 'liter1000km':{factor = 0.00001
                      break;}
                                           
}return factor;    
}
  constructor() { }

  ngOnInit() {}

}
