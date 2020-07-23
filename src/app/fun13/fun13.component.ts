import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun13',
  templateUrl: './fun13.component.html',
  styleUrls: ['./fun13.component.scss'],
})
export class Fun13Component implements OnInit {
  select1='metricTon'
  select2='kilogram'
  range = 1
  result = 0.001
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
    case 'metricTon':{factor = 1000
                  break;}
    case 'kilogram':{factor = 1
                    break;}
    case 'gram':{factor =0.001
                      break;}
    case 'milligram':{factor = 0.000001
                      break;}
    case 'mcg':{factor =1e-9
                        break;} 
    case 'longTon':{factor =  1016.0469088
                          break;}
    case 'shortTon':{factor =907.18474
                            break;}
    case 'stones':{factor = 6.35029318
                              break;}
    case 'pound':{factor =0.45359237
                                break;} 
  case 'ounce':{factor =0.028349523125
                                  break;}
    
                                        
}return factor;    
}
  constructor() { }

  ngOnInit() {}

}
