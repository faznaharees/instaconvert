import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fun7',
  templateUrl: './fun7.component.html',
  styleUrls: ['./fun7.component.scss'],
})
export class Fun7Component implements OnInit {
  select1='Bits'
  select2='Bytes'
  range = 1
  result = 0.125
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
  switch(select1){
    case 'Bits':{this.factor1 = 0.125
                  break;}
    case 'Bytes':{this.factor1 = 1
                    break;}
    case 'Kilobits':{this.factor1 = 128
                      break;}
    case 'Kilobytes':{this.factor1 = 1024
                        break;} 
    case 'Megabits':{this.factor1 = 131072
                          break;}
    case 'Megabytes':{this.factor1 = 1048576
                            break;}
    case 'Gigabits':{this.factor1 = 134217728
                              break;}
    case 'Gigabytes':{this.factor1 = 1073741824
                                break;}  
    case 'Terabits':{this.factor1 = 137438953472
                                  break;}
    case 'Terabytes':{this.factor1 = 1099511627776
                                    break;}
   case 'Petabits':{this.factor1 = 140737488355328
                                      break;}
     case 'Petabytes':{this.factor1 = 1125899906842624
                         break;} 
     case 'Exabits':{this.factor1 = 144115188075855870
                          break;}   
     case 'Exabytes':{this.factor1 = 1152921504606847000
                            break;}                                                                             
  }
  switch(select2){
  case 'Bits':{this.factor2 = 0.125
    break;}
case 'Bytes':{this.factor2 = 1
      break;}
case 'Kilobits':{this.factor2 = 128
        break;}
case 'Kilobytes':{this.factor2 = 1024
          break;} 
case 'Megabits':{this.factor2 = 131072
            break;}
case 'Megabytes':{this.factor2 = 1048576
              break;}
case 'Gigabits':{this.factor2 = 134217728
                break;}
case 'Gigabytes':{this.factor2 = 1073741824
                  break;}  
case 'Terabits':{this.factor2 = 137438953472
                    break;}
case 'Terabytes':{this.factor2 = 1099511627776
                      break;}
case 'Petabits':{this.factor2 = 140737488355328
                        break;}
case 'Petabytes':{this.factor2 = 1125899906842624
           break;} 
case 'Exabits':{this.factor2 = 144115188075855870
            break;}   
case 'Exabytes':{this.factor2 = 1152921504606847000
              break;}                                                                             

}
this.result = this.range * this.factor1/this.factor2
}
  constructor() { }

  ngOnInit() {}

}
