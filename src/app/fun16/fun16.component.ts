import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun16',
  templateUrl: './fun16.component.html',
  styleUrls: ['./fun16.component.scss'],
})
export class Fun16Component implements OnInit {
  select1='seconds'
  select2='milliseconds'
  range = 1
  result = 0.001
  factor1 = 1
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
    case 'milesHour':{factor = 0.44704
                  break;}
    case 'feetSec':{factor = 0.3048
                    break;}
    case 'metersSec':{factor = 1
                      break;}
    case 'kmHour':{factor = 0.2777777777777778
                      break;}
    case 'knots':{factor = 0.5144444444444445
                        break;} 
                                       
}return factor;    
}
  constructor() { }

  ngOnInit() {}

}
