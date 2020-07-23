import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun9',
  templateUrl: './fun9.component.html',
  styleUrls: ['./fun9.component.scss'],
})
export class Fun9Component implements OnInit {
  select1='joules'
  select2='kilowattHours'
  range = 1
  result = 3600000
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
    case 'btuTh':{factor = 1054.35
                  break;}
    case 'btuMean':{factor = 1055.87
                    break;}
    case 'caloriesIt':{factor =4.1868
                      break;}
    case 'caloriesTh':{factor = 4.184
                      break;}
    case 'caloriesMean':{factor =4.19002
                        break;} 
    case 'calories15c':{factor = 4.1858
                          break;}
    case 'calories20c':{factor =4.1819
                            break;}
    case 'caloriesFood':{factor = 4186
                              break;}
    case 'centigradeHeatUnits':{factor = 1900.4
                                break;}  
    case 'electronVolts':{factor = 1.60219e-19
                                  break;}
    case 'ergs':{factor = 1e-7
                                    break;}
   case 'footPoundForce':{factor = 1.3558179483314003
                                      break;}
     case 'footPoundals':{factor = 0.04214
                         break;} 
     case 'gigajoules':{factor = 1000000000
                          break;}   
   case 'horsepowerHours':{factor = 2684520
                            break;} 
  case 'inchPoundForce':{factor = 0.11298482902761668
                              break;} 
  case 'joules':{factor = 1
                               break;}   
   case 'kilocaloriesIt':{factor = 4186.8
                                 break;}                          
  case 'kilocaloriesTh':{factor = 4184
                                  break;}                          
  case 'ilogramForceMeters':{factor = 9.80665
                                    break;}                          
    case 'kilojoules':{factor = 1000
                                      break;}                          
case 'kilowattHours':{factor = 3600000
                                        break;}                          
       case 'megajoules':{factor = 1000000
                                          break;} 
 case 'newtonMeters':{factor = 1
                                            break;}
 
case 'therms':{factor = 105505585.257348
                                            break;}
   case 'wattSeconds':{factor = 1
                                              break;}
    case 'wattHours':{factor = 3600
                                                break;}
        
                                                    
}return factor;    
}

  constructor() { }

  ngOnInit() {}

}
