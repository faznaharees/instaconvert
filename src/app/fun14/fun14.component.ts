import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun14',
  templateUrl: './fun14.component.html',
  styleUrls: ['./fun14.component.scss'],
})
export class Fun14Component implements OnInit {
  select1='watts'
  select2='kilowatts'
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
    case 'watts':{factor = 1
                  break;}
    case 'kilowatts':{factor = 1000
                    break;}
    case 'megawatts':{factor =1000000
                      break;}
    case 'gigawatts':{factor = 1000000000
                      break;}
    case 'btuHour':{factor =0.293071
                        break;} 
    case 'btuMinute':{factor = 17.584267
                          break;}
    case 'btuSecond':{factor =1055.056
                            break;}
    case 'caloriesthHour':{factor = 0.001162222222222222
                              break;}
    case 'caloriesthMinute':{factor =0.06973333333333333
                                break;} 
  case 'caloriesthSecond':{factor = 4.184
                                  break;}
        
    case 'kilocaloriesthHour':{factor =  1.1622222222222223
                                  break;}
    case 'kilocaloriesthMinute':{factor = 69.73333333333333
                                    break;}
 case 'footPoundsForceMinute':{factor =  0.022597
                                      break;}
    case 'footPoundsForceSecond':{factor = 1.35582
                                        break;}
case 'horsepowersElectric':{factor = 746
                                          break;}
  
case 'horderpowersInternational':{factor = 745.6998715822702
                                          break;}
 case 'horsepowersWater':{factor = 746.043
                                            break;}
case 'horsepowersMetric':{factor = 735.4988
                                              break;}
case 'joulesHour':{factor = 0.0002777777777777778
                                                break;}
case 'joulesMinute':{factor = 0.016666666666666666
                                                  break;}
case 'joulesSecond':{factor = 1
                                                    break;}
case 'kilogramForceMetersHour':{factor = 0.002724
                                                      break;}
 case 'kilogramForceMetersMinute':{factor = 0.163444
                                                        break;}
    
                                        
}return factor;    
}
  constructor() { }

  ngOnInit() {}

}
