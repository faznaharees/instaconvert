import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun15',
  templateUrl: './fun15.component.html',
  styleUrls: ['./fun15.component.scss'],
})
export class Fun15Component implements OnInit {
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
    case 'atm':{factor = 1/0.986923
                  break;}
    case 'b':{factor = 1
                    break;}
    case 'dcm':{factor =1/1000000
                      break;}
    case 'ihg':{factor = 1/29.9213
                      break;}
    case 'iw':{factor =1/401.46307866999996
                        break;} 
    case 'k':{factor =  1/1.019716213
                          break;}
    case 'm':{factor =1/1000
                            break;}
    case 'mtm':{factor = 1/750061.673821
                              break;}
    case 'pnm':{factor =1/100000
                                break;} 
  case 'kpa':{factor =1/100
                                  break;}
  case 'psi':{factor =1/14.50377
                                    break;}
      
                                        
}return factor;    
}
  constructor() { }

  ngOnInit() {}

}
