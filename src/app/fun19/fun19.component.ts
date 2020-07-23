import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun19',
  templateUrl: './fun19.component.html',
  styleUrls: ['./fun19.component.scss'],
})
export class Fun19Component implements OnInit {
  select1='milliliter'
  select2='liters'
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
    case 'usGal':{factor = 3.785411784
                  break;}
    case 'usQuart':{factor = 0.946352946
                    break;}
    case 'usPint':{factor =0.473176473
                      break;}
    case 'usCup':{factor = 0.2365882365
                      break;}
    case 'usOz':{factor =0.0295735295625
                        break;} 
    case 'usTbsp':{factor =0.01478676478125
                          break;}
    case 'usTsp':{factor =0.00492892159375
                            break;}
    case 'cubicMeter':{factor = 1000
                              break;}
    case 'liters':{factor =1
                                break;} 
  case 'milliliter':{factor = 0.001
                                  break;}
        
    case 'imperialGal':{factor =  4.54609
                                  break;}
    case 'imperialQuart':{factor =1.1365225
                                    break;}
 case 'imperialPint':{factor =  0.56826125
                                      break;}
    case 'imperialOz':{factor = 0.0284130625
                                        break;}
case 'imperialTbsp':{factor = 0.0177582
                                          break;}
  
case 'imperialTsp':{factor = 0.00591939
                                          break;}
 case 'cubicFoot':{factor = 28.316846592
                                            break;}
case 'cubicInch':{factor = 0.016387064
                                              break;}
                                              
    
                                        
}return factor;    
}
  constructor() { }

  ngOnInit() {}

}
