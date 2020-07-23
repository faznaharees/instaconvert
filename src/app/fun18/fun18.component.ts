import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun18',
  templateUrl: './fun18.component.html',
  styleUrls: ['./fun18.component.scss'],
})
export class Fun18Component implements OnInit {
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
    case 'nanoseconds':{factor = 1e-9
                  break;}
    case 'microseconds':{factor = 0.000001
                    break;}
    case 'milliseconds':{factor =0.001
                      break;}
    case 'seconds':{factor = 1
                      break;}
    case 'minutes':{factor =60
                        break;} 
    case 'hours':{factor = 3600
                          break;}
    case 'days':{factor =86400
                            break;}
    case 'weeks':{factor =604800
                              break;}
    case 'months':{factor =  2628000
                                break;} 
  case 'years':{factor = 31536000
                                  break;}
        
    case 'decades':{factor = 315360000
                                  break;}
    case 'century':{factor =3.1689e-10
                                    break;}
                                        
}return factor;    
}
  constructor() { }

  ngOnInit() {}

}
