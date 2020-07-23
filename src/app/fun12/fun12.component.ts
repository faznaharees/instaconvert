import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun12',
  templateUrl: './fun12.component.html',
  styleUrls: ['./fun12.component.scss'],
})
export class Fun12Component implements OnInit {
  select1='meters'
  select2='kilometer'
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
    case 'kilometer':{factor = 1000
                  break;}
    case 'meters':{factor = 1
                    break;}
    case 'centimeters':{factor =0.01
                      break;}
    case 'millimeters':{factor = 0.001
                      break;}
    case 'miles':{factor =1609.344
                        break;} 
    case 'yards':{factor = 0.9144
                          break;}
    case 'feet':{factor =0.3048006096012192
                            break;}
    case 'inches':{factor = 0.0254
                              break;}
    case 'nauticalMiles':{factor = 1852
                         break;} 
                                   
}return factor;    
}
  constructor() { }

  ngOnInit() {}

}
