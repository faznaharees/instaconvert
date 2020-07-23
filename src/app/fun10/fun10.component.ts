import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun10',
  templateUrl: './fun10.component.html',
  styleUrls: ['./fun10.component.scss'],
})
export class Fun10Component implements OnInit {
  select1='newtons'
  select2='kilonewtons'
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
    case 'newtons':{factor = 1
                  break;}
    case 'kilonewtons':{factor = 1000
                    break;}
    case 'meganewtons':{factor =1000000
                      break;}
    case 'dynes':{factor = 0.00001
                      break;}
    case 'kilogramForce':{factor =9.80665
                        break;} 
    case 'kips':{factor = 4448.222
                          break;}
    case 'poundsForce':{factor =4.4482216152605
                            break;}
    case 'poundals':{factor = 0.138255
                              break;}
    case 'sthenes=kn':{factor = 1000
                                break;} 
  case 'tonsForce':{factor = 9806.65
                                  break;}
        
    case 'tonnesForceUk':{factor = 9964.01641818352
                                  break;}
    case 'tonsForceUs':{factor = 8896.443230521
                                    break;}
                                        
}return factor;    
}
  constructor() { }

  ngOnInit() {}

}
